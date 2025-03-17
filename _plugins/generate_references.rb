require 'bibtex'
require 'yaml'
require 'fileutils'

module Jekyll
  class BibTeXToYAMLConverter < Generator
    safe true

    INPUT_DIR = '_bibliography'
    OUTPUT_DIR = '_data/bibliography_yaml'

    def generate(site)
      FileUtils.mkdir_p(OUTPUT_DIR)
      bib_files = Dir.glob("#{INPUT_DIR}/*.bib")

      bib_files.each do |file|
        yaml_filename = File.basename(file, '.bib') + '.yaml'
        output_path = File.join(OUTPUT_DIR, yaml_filename)
        next if File.exist?(output_path)

        bib = BibTeX.open(file, encoding: 'UTF-8')
        entries = bib.map do |entry|
          entry_hash = entry.to_hash.transform_keys(&:to_s)
          
          # Format author names correctly
          entry_hash["author"] = format_authors(entry_hash["author"]) if entry_hash["author"]

          entry_hash
        end

        File.open(output_path, 'w:UTF-8') { |f| f.write(entries.to_yaml) }
        puts "Converted #{file} to YAML format at #{output_path}"
      end
    end

    # Function to format author names correctly
    def format_authors(authors)
      authors.split(" and ").map do |author|
        author = decode_latex_accents(author) # Convert LaTeX accents

        # Remove curly braces
        author = author.gsub("{", "").gsub("}", "")

        # Swap "Last, First" → "First Last"
        parts = author.split(",").map(&:strip)
        if parts.length == 2
          "#{parts[1]} #{parts[0]}"
        else
          author
        end
      end.join(", ")
    end

    def decode_latex_accents(text)
      # Handle nested braces like \"{a} → ä
      text.gsub!(/\\\"\{([a-zA-Z])\}/, '\"\\1')
      text.gsub!(/\\'?\{([a-zA-Z])\}/, '\\1') # Remove curly braces around single characters
    
      # Mapping LaTeX accents to Unicode
      latex_replacements = {
        /\\'a/  => 'á', /\\'e/  => 'é', /\\'i/  => 'í', /\\'o/  => 'ó', /\\'u/  => 'ú',
        /\\'A/  => 'Á', /\\'E/  => 'É', /\\'I/  => 'Í', /\\'O/  => 'Ó', /\\'U/  => 'Ú',
        /\\`a/  => 'à', /\\`e/  => 'è', /\\`i/  => 'ì', /\\`o/  => 'ò', /\\`u/  => 'ù',
        /\\`A/  => 'À', /\\`E/  => 'È', /\\`I/  => 'Ì', /\\`O/  => 'Ò', /\\`U/  => 'Ù',
        /\\^a/  => 'â', /\\^e/  => 'ê', /\\^i/  => 'î', /\\^o/  => 'ô', /\\^u/  => 'û',
        /\\^A/  => 'Â', /\\^E/  => 'Ê', /\\^I/  => 'Î', /\\^O/  => 'Ô', /\\^U/  => 'Û',
        /\\~n/  => 'ñ', /\\~o/  => 'õ', /\\~a/  => 'ã',
        /\\~N/  => 'Ñ', /\\~O/  => 'Õ', /\\~A/  => 'Ã',
        /\\\"a/ => 'ä', /\\\"e/ => 'ë', /\\\"i/ => 'ï', /\\\"o/ => 'ö', /\\\"u/ => 'ü',
        /\\\"A/ => 'Ä', /\\\"E/ => 'Ë', /\\\"I/ => 'Ï', /\\\"O/ => 'Ö', /\\\"U/ => 'Ü',
        /\\c c/ => 'ç', /\\c C/ => 'Ç',
        /\\ss/  => 'ß', /\\o/   => 'ø', /\\O/   => 'Ø',
        /\\AE/  => 'Æ', /\\ae/  => 'æ',
        /\\OE/  => 'Œ', /\\oe/  => 'œ',
        /\\l/   => 'ł', /\\L/   => 'Ł'
      }
    
      # Apply replacements
      latex_replacements.each do |latex, unicode|
        text.gsub!(latex, unicode)
      end
    
      # Final cleanup: Remove any remaining curly braces
      text.gsub!(/\{(.*?)\}/, '\1')
    
      return text
    end         
  end    
end
