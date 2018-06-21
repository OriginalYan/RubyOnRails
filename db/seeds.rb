require 'yaml'
got_data = YAML.load(File.open(File.join(File.dirname(__FILE__), 'seeds/seeds.yml')))
got_data.each do |head, project|
project.length.times {|i|
word = Project.create(title: project[i]['title'])
project[i]['todos'].length.times {|j|
word.todos << Todo.create(text: project[i]['todos'][j]['text'], isCompleted: ActiveModel::Type::Boolean.new.cast(project[i]['todos'][j]['isCompleted']))
	}
}
end

