Download the data from: https://www.kaggle.com/manasgarg/ipl

There should be 2 files:

    deliveries.csv
    matches.csv

In this data assignment you will transform raw data of IPL to calculate the following stats:

    Number of matches played per year for all the years in IPL.
    Number of matches won per team per year in IPL.
    Extra runs conceded per team in the year 2016
    Top 10 economical bowlers in the year 2015
    Find the number of times each team won the toss and also won the match
    Find a player who has won the highest number of Player of the Match awards for each season
    Find the strike rate of a batsman for each season
    Find the highest number of times one player has been dismissed by another player
    Find the bowler with the best economy in super overs

Implement the functions, one for each task. Use the results of the functions to dump JSON files in the output folder
Instructions:

    Create a new repo with name js-ipl-data-project in Gitlab subgroup, before starting implementation of the solution
    Make sure to follow proper Git practices
    Before submission, make sure that all the points in the below checklist are covered:
        Git commits
        Directory structure
        package.json - dependencies, devDependencies
        .gitignore file
        Proper/Intuitive Variable names
        Separate module for functions

Directory structure:

    src/
        server/
            1-matches-per-year.js
            2-matches-won-per-team-per-year.js
        public/
            output
                matchesPerYear.json
                ...
        data/
            matches.csv
            deliveries.csv
    package.json
    package-lock.json
    .gitignore
