using System;

namespace FootballAnalyzer.Models
{
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
}