class Builders::Helpers < SiteBuilder
  def build
    helper :content_tag do |tag, **options|
      html = <<~HTML
        <#{tag} #{options.map { |k, v| "#{k}=\"#{v}\"" }.join(" ")}>
          #{yield if block_given?}
        </#{tag}>
      HTML
      safe html
    end
  end
end
