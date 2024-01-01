require 'nokogiri'
require 'open-uri'
require 'fileutils'
require 'cgi'
require 'image_processing/vips'

# Function to slugify a string
def slugify(text)
  text.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
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

  image_name = slugify("#{pub_date}-#{title}")
  image_path = "src/images/newsletters/#{image_name}.jpg"
  md_file_path = "src/_newsletters/#{image_name}.md"

  # Skip if image or markdown file already exists
  next if File.exist?(image_path) || File.exist?(md_file_path)

  unless File.exist?(image_path)
    # Save the image using image_processing
    URI.open(image_url) do |image|
      processed_image = ImageProcessing::Vips.source(image).convert('jpg').call
      File.open(image_path, 'wb') do |file|
        file.write(processed_image)
      end
    end
  end

  unless File.exist?(md_file_path)
    # Create a markdown file for the newsletter
    File.open(md_file_path, 'w') do |file|
      file.puts "---"
      file.puts "layout: newsletter"
      file.puts "title: \"#{title}\""
      file.puts "description: \"#{description}\""
      file.puts "date: #{pub_date}"
      file.puts "link: #{link}"
      file.puts "image: #{image_path}"
      file.puts "---"
    end
  end
end
