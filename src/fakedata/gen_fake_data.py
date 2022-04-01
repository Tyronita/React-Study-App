"""
NOTE(gonk): This is fake data i generated quickly just to use for testing on the data visualisation
"""

import json
import random

monthLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
monthDays = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];
subjects = ["Photograph", "Music", "Maths", "Computer Science", "Chemistry"]

data = {s:{m:[] for m in monthLabels} for s in subjects}

for s in subjects:
    for m in monthLabels:
        data[s][m] = [random.randint(0, 10) for i in range( monthDays[monthLabels.index(m)] )]

# with open("./fake_data.json", "w") as f:
    # json.dumps(data, f, indent=4)

print(f'export default {json.dumps(data, indent=4)}')
