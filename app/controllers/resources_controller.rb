class ResourcesController < ApplicationController
  def index
    @collections = @api.collection.list
    @resources = @api.resource.collection_resources(ENV["STASH_COLLECTION_ID"])
    @tags = @api.tag.lists(ENV["STASH_COLLECTION_ID"])
  end
end
