module Jekyll
    class LabPageGenerator < Generator
      safe true
  
      def generate(site)
        lab_files = Dir["_data/labs/*.yml"]
        lab_files.each do |file|
          lab_data = YAML.load_file(file)
          site.pages << LabPage.new(site, site.source, lab_data['url'], lab_data)
        end
      end
    end
  
    class LabPage < Page
      def initialize(site, base, url, data)
        @site = site
        @base = base
        @dir = File.dirname(url)
        @name = File.basename(url) + ".html"
  
        self.process(@name)
        self.read_yaml(File.join(base, '_layouts'), 'sublab.html')
        self.data.merge!(data)
      end
    end
  end