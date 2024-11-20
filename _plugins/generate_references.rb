require 'bibtex'
require 'yaml'
require 'fileutils'

module Jekyll
  class BibTeXToYAMLConverter < Generator
    safe true

    # Configure the input and output directories here
    INPUT_DIR = '_bibliography'
    OUTPUT_DIR = '_data/bibliography_yaml'

    def generate(site)
      # Create the output directory if it doesn't exist
      FileUtils.mkdir_p(OUTPUT_DIR)

      # Locate all BibTeX files in the input directory
      bib_files = Dir.glob("#{INPUT_DIR}/*.bib")

      bib_files.each do |file|
        # Determine the output YAML file path
        yaml_filename = File.basename(file, '.bib') + '.yaml'
        output_path = File.join(OUTPUT_DIR, yaml_filename)

        # Skip conversion if the YAML file already exists
        next if File.exist?(output_path)

        # Parse the BibTeX file and convert it to YAML
        bib = BibTeX.open(file,encoding: 'UTF-8')
        entries = bib.map { |entry| entry.to_hash.transform_keys(&:to_s) }

        # Write the entries to the YAML file
        File.open(output_path, 'w:UTF-8') do |f|
          f.write(entries.to_yaml)
        end

        puts "Converted #{file} to YAML format at #{output_path}"
      end
    end
  end
end
