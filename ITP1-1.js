mark({
    "unit": "ITP1",
    "run": "2022-10",
    "work": "1 (midterm)",
    "sections": [
        {
            "sec": "Character", "mark": 5,
            "cases": [
                { "case":"Moving incorrectly",           "mark": -1, "comment": ["does not move correctly\n"] },
                { "case":"Falling incorrectly", "mark": -1, "comment": ["does not fall correctly\n"] },
                { "case":"Jumping - double",   "mark": -1, "comment": ["jumping while jumping\n"] },
                { "case":"Jumping - none",   "mark": -2, "comment": ["jumping not implemenetd\n"] },
                { "case":"Anchoring incorrect",        "mark": -1, "comment": ["incorrect anchoring\n"] },
                { "case":"Graphical state - minor - not all states ",  "mark": -1, "comment": ["all moves do not have distinct states\n"] },
                { "case":"Graphical state - major - no states",  "mark": -2, "comment": ["no distinct movement states\n"] },
                { "case":"Graphical detail - too little", "mark": -1, "comment": ["too little graphical detail\n"] },
                { "case":"Not implemented",  "mark": -5, "comment": ["not implemented\n"] }
            ]
        },
        {
            "sec": "Collectable", "mark": 5,
            "cases": [
                { "case":"Object - not implemented", "mark": -1, "comment": ["not implemented as object\n"] },
                { "case":"isFound:false - not default", "mark": -1, "comment": ["isFound does not default to false\n"] },
                { "case":"Detail - too little", "mark":  -1, "comment": ["detail too simple\n"] },
                { "case":"Anchoring - incorrect", "mark":  -1, "comment": ["not correctly anchored\n"] },
                { "case":"isFound:true - not set", "mark":  -1, "comment": ["collision does not set isFound to true\n"] },
                { "case":"Redendering - not stopped", "mark":  -1, "comment": ["still rendered after being found\n"] },
                { "case":"Collision - inaccurate", "mark":  -1, "comment": ["collision is inaccurate\n"] },
                { "case":"Collision - none", "mark":  -2, "comment": ["collision is not implemented\n"] },
                { "case":"Not implemented", "mark":  -5, "comment": ["not implemented\n"] }
            ]
        },
        {
            "sec": "Canyon", "mark": 5,
            "cases": [
                { "case":"Object - not implememted", "mark": -1, "comment": ["not implemented as object\n"] },
                { "case":"Anchoring - incorrect", "mark":  -1, "comment": ["not correctly anchored\n"] },
                { "case":"Interaction - none", "mark": -1, "comment": ["no interaction\n"] },
                { "case":"Moving - after falling", "mark": -1, "comment": ["can move after or while falling\n"] },
                { "case":"Jumping - falls over canyon", "mark": -1, "comment": ["falls when jumping over canyon\n"] },
                { "case":"Jumping - can escape", "mark": -1, "comment": ["can jump out of canyon\n"] },
                { "case":"Collision - inaccurate", "mark":  -1, "comment": ["collision is inaccurate\n"] },
                { "case":"Collision - none", "mark":  -2, "comment": ["collision is not implemented\n"] },
                { "case":"Not implemented", "mark":  -5, "comment": ["not implemented\n"] }
            ]
        },
        {
            "sec": "Anchoring", "mark": 5,
            "cases": [
                { "case":"Trees - minor", "mark": -1, "comment": ["trees: minor errors\n"] },
                { "case":"Trees - major - irrational, no vars", "mark": -2, "comment": ["trees: major errors (irrational or no use of variables)\n"] },
                { "case":"Mountains - minor", "mark": -1, "comment": ["mountains: minor errors\n"] },
                { "case":"Mountains - major - irrational, no vars", "mark": -2, "comment": ["mountains: major errors (irrational or no use of variables)\n"] },
                { "case":"Clouds - minor", "mark": -1, "comment": ["clouds: minor errors\n"] },
                { "case":"Clouds - major - irrational, no vars", "mark": -2, "comment": ["clouds: major errors (irrational or no use of variables)\n"] },
                { "case":"Not implemented", "mark":  -5, "comment": ["not implemented\n"] }
            ]
        },
        {
            "sec": "Data structures", "mark": 5,
            "cases": [
                { "case":"Trees - array not num", "mark": -1, "comment": ["trees: not array of numbers\n"] },
                { "case":"Trees - items < 3", "mark": -1, "comment": ["trees: less than 3 items\n"] },
                { "case":"Trees - not implemented", "mark": -2, "comment": ["trees: not implemented\n"] },
                { "case":"Mountains - array not obs", "mark": -1, "comment": ["mountains: not array of objects\n"] },
                { "case":"Mountains - items < 3", "mark": -1, "comment": ["mountains: less than 3 items\n"] },
                { "case":"Mountains - property - no additional", "mark": -1, "comment": ["mountains: should have additional property\n"] },
                { "case":"Mountains - not implemented", "mark": -2, "comment": ["mountains: not implemented\n"] },
                { "case":"Clouds - array not objs", "mark": -1, "comment": ["clouds: not array of objects\n"] },
                { "case":"Clouds - items < 3", "mark": -1, "comment": ["clouds: less than 3 items\n"] },
                { "case":"Clouds - property - no additional", "mark": -1, "comment": ["clouds: should have additional property\n"] },
                { "case":"Clouds - not implemented", "mark": -2, "comment": ["clouds: not implemented\n"] },
                { "case":"Not implemented", "mark":  -5, "comment": ["not implemented\n"] }
            ]
        },
        {
            "sec": "Looping", "mark": 5,
            "cases": [
                    { "case":"Trees - dynamic - length", "mark": -1, "comment": ["trees: does not use length property\n"] },
                    { "case":"Trees - data not in array", "mark": -1, "comment": ["trees: using data not in array\n"] },
                    { "case":"Trees - variables - local not decalred", "mark": -1, "comment": ["trees: local vars not declared\n"] },
                    { "case":"Trees - termination", "mark": -1, "comment": ["trees: may not terminate\n"] },
                    { "case":"Trees - loop not used", "mark": -2, "comment": ["trees: loop not used\n"] },
                    { "case":"Mountains - dynamic - length", "mark": -1, "comment": ["mountains: does not use length property\n"] },
                    { "case":"Mountains - data not in array", "mark": -1, "comment": ["mountains: using data not in array\n"] },
                    { "case":"Mountains - variables - local not decalred", "mark": -1, "comment": ["mountains: local vars not declared\n"] },
                    { "case":"Mountains - termination", "mark": -1, "comment": ["mountains: may not terminate\n"] },
                    { "case":"Mountains - loop not used", "mark": -2, "comment": ["mountains: loop not used\n"] },
                    { "case":"Clounds - dynamic - length", "mark": -1, "comment": ["clouds: does not use length property\n"] },
                    { "case":"Clounds - data not in array", "mark": -1, "comment": ["clouds: using data not in array\n"] },
                    { "case":"Clounds - variables - local not decalred", "mark": -1, "comment": ["clouds: local vars not declared\n"] },
                    { "case":"Clounds - termination", "mark": -1, "comment": ["clouds: may not terminate\n"] },
                    { "case":"Clounds - loop not used", "mark": -2, "comment": ["clouds: loop not used\n"] },
                    { "case":"Not implemented", "mark":  -5, "comment": ["not implemented\n"] }
                ]
        },
        {
            "sec": "Scrolling", "mark": 3,
            "cases": [
                { "case":"Objects - some not scrolling", "mark": -1, "comment": ["some objects not scrolling\n"] },
                { "case":"Character not in center", "mark": -1, "comment": ["character does not stay in centre\n"] },
                { "case":"Method - minor - poor", "mark": -1, "comment": ["poor functionality\n"] },
                { "case":"Method - major - very poor", "mark": -2, "comment": ["very poor functionality\n"] },
                { "case":"push/translate/pop", "mark": -2, "comment": ["push(),translate(),pop() not used\n"] },
                { "case":"Not implemented", "mark":  -3, "comment": ["not implemented\n"] }
            ]
        },
        {
            "sec": "Code", "mark": 6,
            "cases": [
                { "case":"Indentation - minor", "mark": -1, "comment": ["inconsistent indentation\n"] },
                { "case":"Indentation - major", "mark": -2, "comment": ["poor indentation\n"] },
                { "case":"Whitespace - minor", "mark": -1, "comment": ["inconsistent whitespace\n"] },
                { "case":"Whitespace - major", "mark": -2, "comment": ["consistent excess whitespace\n"] },
                { "case":"Implicit vars", "mark": -1, "comment": ["implicitly declared variables\n"] },
                { "case":"Initialisation - missed", "mark": -1, "comment": ["unitialised variables\n"] },
                { "case":"Naming", "mark": -1, "comment": ["poor/inconsistent variable naming\n"] },
                { "case":"Comments", "mark": -1, "comment": ["poor commenting\n"] },
                { "case":"Unused", "mark": -1, "comment": ["unused variables\n"] },
                { "case":"Logic - over complex", "mark": -1, "comment": ["over complex logic\n"] },
                { "case":"Commented out code", "mark": -1, "comment": ["commented out code\n"] },
                { "case":"Template - minimal", "mark":  -6, "comment": ["minimal changes made to template\n"] }
            ]
        },
        {
            "sec": "Submission", "mark": 1,
            "cases": [
                { "case":"Zip", "mark": -1, "comment": [".zip format not used"] },
                { "case":"Assets", "mark": -1, "comment": ["missing assets"] },
                { "case":"Nesting", "mark": -1, "comment": ["deep nesting of folders"] },
            ]
        }
    ],
    "comments" : [
      { "group": "Opening", "comment": "Well done for submitting your midterm project.\n"},
      { "group": "Design","comment": "Very nice design work so far.\n"},
      { "group": "Design","comment": "Nice basic design, but there is room for improvement.\n"},
      { "group": "Design","comment": "Basic design, but there is time to improve.\n"},
      { "group": "Structure","comment": "Using redundant variables to populate data structures / for in loop - code used may be that warned against in course video (Week 10, Lesson 5.5, 'Watch this before submitting your midterm').\n"},      
      { "group": "Anchoring","comment": "Take time to ensure all objects are correctly anchored (no offsets used in drawing or collision detection)\n"},
      { "group": "Help", "comment": "If you are struggling with the programming try to find the time to watch the relevant course videos again, and use the forums and webinars for help.\n"},
      { "group": "Help", "comment": "If you are having problems keeping up with the course you can email Zendesk: BScCS-support@london.ac.uk for advice and support.\n"},
      { "group": "Closing","comment": "Keep up the good work, looking forward to seeing your final project.\n"},
      { "group": "Closing","comment": "Keep on working towards your final project.\n"},
      { "group": "Closing","comment": "Try to keep on working towards your final project.\n"}
    ]
})