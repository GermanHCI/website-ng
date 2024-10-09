module Jekyll
        class ReferencesGenerator < Generator
          safe true
        
          def generate(site)
            lab_files = Dir["_bibliography/*.bib"]
            lab_files.each do |file|
                # load the file data convert it to different type but maintaining the language
                # lab_data = YAML.load_file(file)
                # site.pages << LabPage.new(site, site.source, lab_data['url'], lab_data)
            end
          end
        end
    end
              