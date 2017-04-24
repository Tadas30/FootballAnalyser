using System;
namespace FootballAnalyzer.Models
{
    public class Data
    {

        public class Rootobject
        {
            public string timeFrameStart { get; set; }
            public string timeFrameEnd { get; set; }
            public int count { get; set; }
            public Fixture[] fixtures { get; set; }
        }

        public class Fixture
        {
            public _Links _links { get; set; }
            public DateTime date { get; set; }
            public string status { get; set; }
            public int matchday { get; set; }
            public string homeTeamName { get; set; }
            public string awayTeamName { get; set; }
            public Result result { get; set; }
            public Odds odds { get; set; }
        }

        public class _Links
        {
            public Self self { get; set; }
            public Competition competition { get; set; }
            public Hometeam homeTeam { get; set; }
            public Awayteam awayTeam { get; set; }
        }

        public class Self
        {
            public string href { get; set; }
        }

        public class Competition
        {
            public string href { get; set; }
        }

        public class Hometeam
        {
            public string href { get; set; }
        }

        public class Awayteam
        {
            public string href { get; set; }
        }

        public class Result
        {
            public int? goalsHomeTeam { get; set; }
            public int? goalsAwayTeam { get; set; }
        }

        public class Odds
        {
            public float homeWin { get; set; }
            public float draw { get; set; }
            public float awayWin { get; set; }
        }

    }
}