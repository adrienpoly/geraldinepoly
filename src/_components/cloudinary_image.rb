# const { imageId, width, ...rest } = props;
#   // const publicId = src.split('/').pop().split('.')[0];
#   const srcset = [
#     "https://res.cloudinary.com/adrien/image/upload/c_scale,w_#{width}/geraldine-poly/#{imageId}.webp",
#     "https://res.cloudinary.com/adrien/image/upload/c_scale,w_#{width * 2}/geraldine-poly/#{imageId}.webp 2x"
#   ].join(', ');

#   const src = "https://res.cloudinary.com/adrien/image/upload/c_scale,w_#{width}/geraldine-poly/#{imageId}.jpg"
#   const srcsetImg = "https://res.cloudinary.com/adrien/image/upload/c_scale,w_#{width * 2}/geraldine-poly/#{imageId}.jpg 2x"
#   return (
#   );

class CloudinaryImage < Bridgetown::Component
  def initialize(image_id:, width: nil, height: nil, **kwargs)
    @kwargs = kwargs
    @image_id = image_id
    @width = width
    @height = height
    raise unless width || height
  end

  attr_reader :kwargs, :image_id, :width, :height

  def classes
    "shaddow-lg" if kwargs[:shadow] == true
  end

  def src
    "https://res.cloudinary.com/adrien/image/upload/#{options}/geraldine-poly/#{image_id}.jpg"
  end

  def srcset_img
    "https://res.cloudinary.com/adrien/image/upload/#{options(x: 2)}/geraldine-poly/#{image_id}.jpg 2x"
  end

  def srcset
    [
      "https://res.cloudinary.com/adrien/image/upload/#{options}/geraldine-poly/#{image_id}.webp",
      "https://res.cloudinary.com/adrien/image/upload/#{options(x: 2)}/geraldine-poly/#{image_id}.webp 2x"
    ].join(", ")
  end

  def options(x: 1)
    if height && width
      ["c_fill", "h_#{height * x}", "w_#{width * x}"].join(",")
    elsif width
      ["c_scale", "w_#{width * x}"].join(",")
    elsif height
      ["c_scale", "h_#{height * x}"].join(",")
    end
  end
end
