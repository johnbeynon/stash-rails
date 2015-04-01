class ResourcesController < ApplicationController
  def index
    @resources = @api.resource.lists(ENV["STASH_COLLECTION_ID"])
    @tags = @api.tag.lists(ENV["STASH_COLLECTION_ID"])
  end
end
