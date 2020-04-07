Ext.define('Executive.dashboard1.store.Performance', {
    extend: 'Ext.data.Store',
    alias: 'store.performance',

    model: 'Executive.dashboard1.model.Performance',
    remoteFilter: true,

    proxy: {
        type: 'memory',
        reader: 'array',
        data: [
            // id, company, time, open, high, low, close
            [ 0, "AAPL", new Date("Jun 1 2012").getTime(), 600, 614, 578, 590 ],
            [ 1, "AAPL", new Date("Jul 1 2012").getTime(), 590, 609, 580, 580 ],
            [ 2, "AAPL", new Date("Aug 1 2012").getTime(), 580, 602, 578, 602 ],
            [ 3, "AAPL", new Date("Sep 1 2012").getTime(), 602, 614, 586, 586 ],
            [ 4, "AAPL", new Date("Oct 1 2012").getTime(), 586, 602, 565, 565 ],
            [ 5, "AAPL", new Date("Nov 1 2012").getTime(), 589, 605, 568, 568 ],
            [ 6, "AAPL", new Date("Dec 1 2012").getTime(), 586, 602, 565, 565 ],
            [ 7, "AAPL", new Date("Jan 1 2013").getTime(), 602, 614, 581, 581 ],
            [ 8, "AAPL", new Date("Feb 4 2013").getTime(), 581, 598, 570, 571 ],
            [ 9, "AAPL", new Date("Mar 3 2013").getTime(), 586, 602, 565, 565 ],
            [ 10, "AAPL", new Date("Apr 1 2013").getTime(), 596, 602, 595, 605 ],
            [ 11, "AAPL", new Date("May 1 2013").getTime(), 526, 546, 526, 530 ],
            [ 12, "AAPL", new Date("Jun 1 2013").getTime(), 544, 570, 540, 530 ],
            [ 13, "AAPL", new Date("Jul 1 2013").getTime(), 516, 612, 535, 575 ],
            [ 14, "AAPL", new Date("Aug 1 2013").getTime(), 526, 622, 525, 565 ],
            [ 15, "AAPL", new Date("Sep 1 2013").getTime(), 536, 632, 515, 535 ],
            [ 16, "AAPL", new Date("Oct 1 2013").getTime(), 546, 642, 565, 545 ],
            [ 17, "AAPL", new Date("Nov 1 2013").getTime(), 556, 662, 555, 515 ],
            [ 18, "AAPL", new Date("Dec 1 2013").getTime(), 566, 602, 565, 525 ],
            [ 19, "AAPL", new Date("Jan 1 2014").getTime(), 602, 614, 596, 516 ],
            [ 20, "AAPL", new Date("Feb 1 2014").getTime(), 586, 602, 565, 565 ],
            [ 22, "AAPL", new Date("Mar 1 2014").getTime(), 601, 606, 545, 565 ],
            [ 24, "AAPL", new Date("Apr 1 2014").getTime(), 586, 602, 565, 565 ],
            [ 26, "AAPL", new Date("May 1 2014").getTime(), 586, 604, 565, 565 ],
            [ 28, "GOOG", new Date("Jun 1 2012").getTime(), 700, 714, 678, 690 ],
            [ 29, "GOOG", new Date("Jul 1 2012").getTime(), 590, 709, 680, 680 ],
            [ 30, "GOOG", new Date("Aug 1 2012").getTime(), 680, 702, 678, 702 ],
            [ 31, "GOOG", new Date("Sep 1 2012").getTime(), 702, 714, 686, 686 ],
            [ 32, "GOOG", new Date("Oct 1 2012").getTime(), 686, 712, 625, 615 ],
            [ 33, "GOOG", new Date("Nov 1 2012").getTime(), 686, 722, 635, 655 ],
            [ 34, "GOOG", new Date("Dec 1 2012").getTime(), 686, 732, 645, 625 ],
            [ 35, "GOOG", new Date("Jan 1 2013").getTime(), 602, 634, 616, 656 ],
            [ 36, "GOOG", new Date("Feb 4 2013").getTime(), 616, 712, 665, 615 ],
            [ 37, "GOOG", new Date("Mar 3 2013").getTime(), 626, 742, 635, 685 ],
            [ 38, "GOOG", new Date("Apr 1 2013").getTime(), 636, 752, 665, 675 ],
            [ 39, "GOOG", new Date("May 1 2013").getTime(), 616, 742, 655, 635 ],
            [ 40, "GOOG", new Date("Jun 1 2013").getTime(), 656, 722, 665, 615 ],
            [ 41, "GOOG", new Date("Jul 1 2013").getTime(), 646, 732, 615, 605 ],
            [ 42, "GOOG", new Date("Aug 1 2013").getTime(), 616, 762, 695, 615 ],
            [ 43, "GOOG", new Date("Sep 1 2013").getTime(), 636, 772, 665, 635 ],
            [ 44, "GOOG", new Date("Oct 1 2013").getTime(), 716, 742, 665, 645 ],
            [ 45, "GOOG", new Date("Nov 1 2013").getTime(), 686, 712, 675, 615 ],
            [ 46, "GOOG", new Date("Dec 1 2013").getTime(), 656, 732, 660, 605 ],
            [ 47, "GOOG", new Date("Jan 1 2014").getTime(), 712, 744, 701, 616 ],
            [ 48, "GOOG", new Date("Feb 1 2014").getTime(), 686, 702, 665, 605 ],
            [ 50, "GOOG", new Date("Mar 1 2014").getTime(), 626, 732, 615, 660 ],
            [ 52, "GOOG", new Date("Apr 1 2014").getTime(), 626, 722, 635, 625 ],
            [ 54, "GOOG", new Date("May 1 2014").getTime(), 646, 752, 655, 645 ]
        ]
    }
});
