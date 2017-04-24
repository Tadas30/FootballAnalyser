using System.Collections.Generic;
using System.Linq;

namespace FootballAnalyzer.Models
{
    public class RootObject
    {
        public string timeFrameStart { get; set; }
        public string timeFrameEnd { get; set; }
        public int count { get; set; }
        public Fixture[] fixtures { get; set; }
        public List<Fixture> Games => fixtures.ToList();
    }
}