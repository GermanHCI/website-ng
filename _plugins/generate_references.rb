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
      # Remove unnecessary curly braces around encoded characters
      text.gsub!(/\{\\'([a-zA-Z])\}/, '\1́')  # {\'e} → é
      text.gsub!(/\{\\`([a-zA-Z])\}/, '\1̀')  # {\`e} → è
      text.gsub!(/\{\\^([a-zA-Z])\}/, '\1̂')  # {\^e} → ê
      text.gsub!(/\{\\~([a-zA-Z])\}/, '\1̃')  # {\~n} → ñ
      text.gsub!(/\{\\\"([a-zA-Z])\}/, '\1̈') # {\"o} → ö, {\"u} → ü
      text.gsub!(/\{\\c ([a-zA-Z])\}/, '\1̧') # {\c c} → ç
    
      # Handle LaTeX accents without braces
      text.gsub!(/\\'([a-zA-Z])/, '\1́')  # \'e → é
      text.gsub!(/\\`([a-zA-Z])/, '\1̀')  # \`e → è
      text.gsub!(/\\^([a-zA-Z])/, '\1̂')  # \^e → ê
      text.gsub!(/\\~([a-zA-Z])/, '\1̃')  # \~n → ñ
      text.gsub!(/\\\"([a-zA-Z])/, '\1̈') # \"o → ö, \"u → ü
      text.gsub!(/\\c ([a-zA-Z])/, '\1̧') # \c c → ç
    
      # Handle special characters
      text.gsub!(/\\ss/, 'ß')  # \ss → ß
      text.gsub!(/\\o/, 'ø')   # \o → ø
      text.gsub!(/\\AE/, 'Æ')  # \AE → Æ
      text.gsub!(/\\ae/, 'æ')  # \ae → æ
      text.gsub!(/\\OE/, 'Œ')  # \OE → Œ
      text.gsub!(/\\oe/, 'œ')  # \oe → œ
      text.gsub!(/\\l/, 'ł')   # \l → ł
    
      return text
    end
  end    
end
