# Load and modify the SVG file to change the background color to black
svg_file_path = "/Users/ritikahiremath/Desktop/DesktopMacBook/GermanHCI/assets/img/map_whitebg.svg"

# Read the original SVG file
with open(svg_file_path, "r", encoding="utf-8") as file:
    svg_content = file.read()

# Modify the background color by adding a black rectangle as the first element inside <svg>
if "<svg" in svg_content:
    svg_content = svg_content.replace(
        "<svg", '<svg style="background-color:black;"', 1
    )

# Save the modified SVG content
modified_svg_path = "/Users/ritikahiremath/Desktop/DesktopMacBook/GermanHCI/assets/img/map_blackbg.svg"
with open(modified_svg_path, "w", encoding="utf-8") as file:
    file.write(svg_content)

# Return the path to the modified file
modified_svg_path
