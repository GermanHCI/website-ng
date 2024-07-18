import bibtexparser
import yaml

# Read the .bib file
with open('/Users/ritikahiremath/Desktop/GermanHCI/_bibliography/references.bib', 'r') as bibfile:
    bib_database = bibtexparser.load(bibfile)

# Convert to YAML format
yaml_data = yaml.dump(bib_database.entries, sort_keys=False)

# Write to a .yaml file
with open('/Users/ritikahiremath/Desktop/GermanHCI/_data/references.yaml', 'w') as yamlfile:
    yamlfile.write(yaml_data)
