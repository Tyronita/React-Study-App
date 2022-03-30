"""
NOTE(gonk): This is fake data i generated quickly just to use for testing on the data visualisation
"""

import json
import random

monthLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
monthDays = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];
data = {m:[] for m in monthLabels}

for m in monthLabels:
    data[m] = [random.randint(0, 10) for i in range( monthDays[monthLabels.index(m)] )]

# with open("./fake_data.json", "w") as f:
    # json.dumps(data, f, indent=4)

print(json.dumps(data, indent=4))
