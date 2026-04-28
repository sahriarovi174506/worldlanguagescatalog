import os
import re

directories = ['css', 'js', '.']
file_extensions = ['.css', '.html', '.js']

# Patterns
# Match px and rem.
# For px: convert to rem by dividing by 10. E.g., 40px -> 4rem
# For rem: Currently 1rem = 16px. So 1rem should become 1.6rem.
# User rule: keep 1px, 2px borders/shadows/etc as px.

px_pattern = re.compile(r'(\d+(?:\.\d+)?)px')
rem_pattern = re.compile(r'(\d+(?:\.\d+)?)rem')

def process_match_px(match):
    val = float(match.group(1))
    if val <= 2:
        return match.group(0) # Keep small px as px
    
    # Check if original was used for max-width like 768px, 991px, etc.
    # Actually wait! The user said: "Keep existing breakpoints unless necessary." 
    # CSS media queries typically use px. Should we convert media queries? 
    # Usually media queries can be converted to rem or kept as px. The user's prompt showed `max-width: 991px` in px, meaning they keep media queries in px! 
    # We should exclude media queries, or the script should check context.
    
    rem_val = val / 10
    # Clean unnecessary decimals
    if rem_val.is_integer():
        return f"{int(rem_val)}rem"
    return f"{round(rem_val, 3)}rem"

def process_match_rem(match):
    val = float(match.group(1))
    # Old rem: 1rem = 16px.
    # New rem: 1rem = 10px.
    # So new_rem = old_rem * 16 / 10 = old_rem * 1.6
    new_rem = val * 1.6
    if new_rem.is_integer():
        return f"{int(new_rem)}rem"
    return f"{round(new_rem, 3)}rem"

with open("scratch/research.txt", "w", encoding="utf-8") as out:
    for dir_path in directories:
        for file in os.listdir(dir_path):
            if any(file.endswith(ext) for ext in file_extensions):
                full_path = os.path.join(dir_path, file)
                if os.path.isfile(full_path):
                    with open(full_path, "r", encoding="utf-8") as f:
                        lines = f.readlines()
                    
                    found_px = False
                    for i, line in enumerate(lines):
                        if "@media" in line and "px" in line:
                            out.write(f"Media query found: {line.strip()}\n")
                            continue
                        
                        px_matches = px_pattern.findall(line)
                        rem_matches = rem_pattern.findall(line)
                        if px_matches or rem_matches:
                            out.write(f"[{file}:{i+1}] {line.strip()}\n")
