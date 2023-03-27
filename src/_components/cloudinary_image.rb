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
  def initialize(image_id:, width:, **kwargs)
    @kwargs = kwargs
    @image_id = image_id
    @width = width
  end

  attr_reader :kwargs, :image_id, :width

  def src
    "https://res.cloudinary.com/adrien/image/upload/c_scale,w_#{width}/geraldine-poly/#{image_id}.jpg"
  end

  def srcset_img
    "https://res.cloudinary.com/adrien/image/upload/c_scale,w_#{width * 2}/geraldine-poly/#{image_id}.jpg 2x"
  end

  def srcset
    [
      "https://res.cloudinary.com/adrien/image/upload/c_scale,w_#{width}/geraldine-poly/#{image_id}.webp",
      "https://res.cloudinary.com/adrien/image/upload/c_scale,w_#{width * 2}/geraldine-poly/#{image_id}.webp 2x"
    ].join(", ")
  end
end
