class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]

  def index
    @projects = Project.all
  end

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)

    respond_to do |format|
      if @project.save
        format.html {redirect_to projects_url }
      end
    end
  end

  def update
    respond_to do |format|
      if @project.update(project_params)
        format.html {redirect_to projects_url}
      end
    end
  end

  def destroy
    @project.destroy
    respond_to do |format|
      format.html {redirect_to projects_url}
    end
  end

  private
    def set_project
      @project = Project.find(params[:id])
    end

    def project_params
      params.require(:project).permit(:title)
    end

end
