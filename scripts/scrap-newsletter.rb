require 'nokogiri'
require 'open-uri'
require 'fileutils'
require 'cgi'
require 'image_processing/vips'

# Function to slugify a string
def slugify(text)
  text.downcase.strip.gsub(/[^a-z0-9\s]/, '').gsub(/\s+/, '-')
end

# Fetch and parse the RSS feed
rss_feed_url = 'https://geraldinepoly.substack.com/feed'
rss_content = URI.open(rss_feed_url).read
feed = Nokogiri::XML(rss_content)

# Ensure the directories exist
FileUtils.mkdir_p('src/images/newsletters')
FileUtils.mkdir_p('src/_newsletters')

# Process each item in the feed
feed.xpath('//item').each do |item|
  title = CGI.unescapeHTML(item.xpath('title').text.strip)
  description = CGI.unescapeHTML(item.xpath('description').text.strip)
  pub_date = DateTime.parse(item.xpath('pubDate').text).strftime('%Y-%m-%d')
  image_url = item.xpath('enclosure').first['url']
  link = item.xpath('link').text.strip

  image_name = "#{pub_date}-#{slugify(title)}"
  image_path = "src/images/newsletters/#{image_name}.jpg"
  thumb_image_path = "src/images/newsletters/thumb_#{image_name}.jpg"
  md_file_path = "src/_newsletters/#{image_name}.md"

  # Skip if image or markdown file already exists
  # next if File.exist?(image_path) || File.exist?(md_file_path)

  # unless File.exist?(image_path)
    # Save the image using image_processing
    URI.open(image_url) do |image|
      processed_image = ImageProcessing::Vips.source(image).convert('jpg').call
      File.open(image_path, 'wb') do |file|
        file.write(processed_image.read)
      end

      thumb_image = ImageProcessing::Vips.source(image).resize_to_fill(512,512).convert('jpg').call
      File.open(thumb_image_path, 'wb') do |file|
        file.write(thumb_image.read)
      end
    end
  # end

  unless File.exist?(md_file_path)
    # Create a markdown file for the newsletter
    File.open(md_file_path, 'w') do |file|
      file.puts "---"
      file.puts "layout: default"
      file.puts "title: \"#{title}\""
      file.puts "description: \"#{description}\""
      file.puts "date: #{pub_date}"
      file.puts "link: #{link}"
      file.puts "sitemap: false"
      file.puts "image: #{image_path.gsub('src/', '/')}"
      file.puts "thumb_image: #{thumb_image_path.gsub('src/', '/')}"
      file.puts "---"
    end
  end
end
