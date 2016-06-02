defmodule Superrentals.RentalView do
  use Superrentals.Web, :view
  use JaSerializer.PhoenixView
  attributes [:title, :owner, :city, :type, :image, :bedrooms]
end
