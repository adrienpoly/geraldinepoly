class Button < Bridgetown::Component
  def initialize(text: nil, **kwargs)
    @kwargs = kwargs
  end

  attr_reader :kwargs, :text
end
