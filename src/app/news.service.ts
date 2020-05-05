import { Injectable } from '@angular/core';

@Injectable()
export class NewsService {

  news = [
    {
      newsId: 1,
      imgUrl : 'https://img.jakpost.net/c/2018/03/26/2018_03_26_42921_1522074009._large.jpg',
      newsTitle : 'Covid-19 News 2020',
      newsDesc : "Some quick example text to build on the card title and make up the bulk of the card's content. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear.",
      likes:38,
      comments:15,
    },
    {
      newsId: 2,
      imgUrl : 'https://img.medscapestatic.com/thumbnail_library/covid-comment-thumb_800x450.png',
      newsTitle : 'How is the COVID-19 Pandemic Affecting You?',
      newsDesc : "Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear.",
      likes:40,
      comments:16,
    },
    {
      newsId: 3,
      imgUrl : 'https://smedia2.intoday.in/aajtak/images/stories/092019/gold_reuters_750_1588672585_618x347.jpeg',
      newsTitle : 'लॉकडाउन 3.0 के बीच सस्ता हो गया सोना-चांदी , जानें कितना है आज का रेट',
      newsDesc : "मंगलवार को सोना 170 रुपये सस्ता होकर अब 45743 रुपये प्रति 10 ग्राम पर आ गया है. चांदी 590 रुपये सस्ती हुई है. इसके पहले सोमवार को सोना 180 रुपये उछलकर 45913 रुपये प्रति 10 ग्राम पर पहुंच गया था. सोमवार को चांदी 900 रुपये प्रति किलो सस्ती हुई थी. मंगलवार को सोना 170 रुपये सस्ता होकर अब 45743 रुपये प्रति 10 ग्राम पर आ गया है. चांदी 590 रुपये सस्ती हुई है. इसके पहले सोमवार को सोना 180 रुपये उछलकर 45913 रुपये प्रति 10 ग्राम पर पहुंच गया था. सोमवार को चांदी 900 रुपये प्रति किलो सस्ती हुई थी. मंगलवार को सोना 170 रुपये सस्ता होकर अब 45743 रुपये प्रति 10 ग्राम पर आ गया है. चांदी 590 रुपये सस्ती हुई है. इसके पहले सोमवार को सोना 180 रुपये उछलकर 45913 रुपये प्रति 10 ग्राम पर पहुंच गया था. सोमवार को चांदी 900 रुपये प्रति किलो सस्ती हुई थी.",
      likes:40,
      comments:16,
    },
    {
      newsId: 1,
      imgUrl : 'https://img.jakpost.net/c/2018/03/26/2018_03_26_42921_1522074009._large.jpg',
      newsTitle : 'Covid-19 News 2020',
      newsDesc : "Some quick example text to build on the card title and make up the bulk of the card's content. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear.",
      likes:38,
      comments:15,
    },
    {
      newsId: 2,
      imgUrl : 'https://img.medscapestatic.com/thumbnail_library/covid-comment-thumb_800x450.png',
      newsTitle : 'How is the COVID-19 Pandemic Affecting You?',
      newsDesc : "Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear.",
      likes:40,
      comments:16,
    },
    {
      newsId: 3,
      imgUrl : 'https://smedia2.intoday.in/aajtak/images/stories/092019/gold_reuters_750_1588672585_618x347.jpeg',
      newsTitle : 'लॉकडाउन 3.0 के बीच सस्ता हो गया सोना-चांदी , जानें कितना है आज का रेट',
      newsDesc : "मंगलवार को सोना 170 रुपये सस्ता होकर अब 45743 रुपये प्रति 10 ग्राम पर आ गया है. चांदी 590 रुपये सस्ती हुई है. इसके पहले सोमवार को सोना 180 रुपये उछलकर 45913 रुपये प्रति 10 ग्राम पर पहुंच गया था. सोमवार को चांदी 900 रुपये प्रति किलो सस्ती हुई थी. मंगलवार को सोना 170 रुपये सस्ता होकर अब 45743 रुपये प्रति 10 ग्राम पर आ गया है. चांदी 590 रुपये सस्ती हुई है. इसके पहले सोमवार को सोना 180 रुपये उछलकर 45913 रुपये प्रति 10 ग्राम पर पहुंच गया था. सोमवार को चांदी 900 रुपये प्रति किलो सस्ती हुई थी. मंगलवार को सोना 170 रुपये सस्ता होकर अब 45743 रुपये प्रति 10 ग्राम पर आ गया है. चांदी 590 रुपये सस्ती हुई है. इसके पहले सोमवार को सोना 180 रुपये उछलकर 45913 रुपये प्रति 10 ग्राम पर पहुंच गया था. सोमवार को चांदी 900 रुपये प्रति किलो सस्ती हुई थी.",
      likes:40,
      comments:16,
    },
    {
      newsId: 1,
      imgUrl : 'https://img.jakpost.net/c/2018/03/26/2018_03_26_42921_1522074009._large.jpg',
      newsTitle : 'Covid-19 News 2020',
      newsDesc : "Some quick example text to build on the card title and make up the bulk of the card's content. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear.",
      likes:38,
      comments:15,
    },
    {
      newsId: 2,
      imgUrl : 'https://img.medscapestatic.com/thumbnail_library/covid-comment-thumb_800x450.png',
      newsTitle : 'How is the COVID-19 Pandemic Affecting You?',
      newsDesc : "Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear.",
      likes:40,
      comments:16,
    },
    {
      newsId: 3,
      imgUrl : 'https://smedia2.intoday.in/aajtak/images/stories/092019/gold_reuters_750_1588672585_618x347.jpeg',
      newsTitle : 'लॉकडाउन 3.0 के बीच सस्ता हो गया सोना-चांदी , जानें कितना है आज का रेट',
      newsDesc : "मंगलवार को सोना 170 रुपये सस्ता होकर अब 45743 रुपये प्रति 10 ग्राम पर आ गया है. चांदी 590 रुपये सस्ती हुई है. इसके पहले सोमवार को सोना 180 रुपये उछलकर 45913 रुपये प्रति 10 ग्राम पर पहुंच गया था. सोमवार को चांदी 900 रुपये प्रति किलो सस्ती हुई थी. मंगलवार को सोना 170 रुपये सस्ता होकर अब 45743 रुपये प्रति 10 ग्राम पर आ गया है. चांदी 590 रुपये सस्ती हुई है. इसके पहले सोमवार को सोना 180 रुपये उछलकर 45913 रुपये प्रति 10 ग्राम पर पहुंच गया था. सोमवार को चांदी 900 रुपये प्रति किलो सस्ती हुई थी. मंगलवार को सोना 170 रुपये सस्ता होकर अब 45743 रुपये प्रति 10 ग्राम पर आ गया है. चांदी 590 रुपये सस्ती हुई है. इसके पहले सोमवार को सोना 180 रुपये उछलकर 45913 रुपये प्रति 10 ग्राम पर पहुंच गया था. सोमवार को चांदी 900 रुपये प्रति किलो सस्ती हुई थी.",
      likes:40,
      comments:16,
    },
    {
      newsId: 1,
      imgUrl : 'https://img.jakpost.net/c/2018/03/26/2018_03_26_42921_1522074009._large.jpg',
      newsTitle : 'Covid-19 News 2020',
      newsDesc : "Some quick example text to build on the card title and make up the bulk of the card's content. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear.",
      likes:38,
      comments:15,
    },
    {
      newsId: 2,
      imgUrl : 'https://img.medscapestatic.com/thumbnail_library/covid-comment-thumb_800x450.png',
      newsTitle : 'How is the COVID-19 Pandemic Affecting You?',
      newsDesc : "Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear.",
      likes:40,
      comments:16,
    },
    {
      newsId: 3,
      imgUrl : 'https://smedia2.intoday.in/aajtak/images/stories/092019/gold_reuters_750_1588672585_618x347.jpeg',
      newsTitle : 'लॉकडाउन 3.0 के बीच सस्ता हो गया सोना-चांदी , जानें कितना है आज का रेट',
      newsDesc : "मंगलवार को सोना 170 रुपये सस्ता होकर अब 45743 रुपये प्रति 10 ग्राम पर आ गया है. चांदी 590 रुपये सस्ती हुई है. इसके पहले सोमवार को सोना 180 रुपये उछलकर 45913 रुपये प्रति 10 ग्राम पर पहुंच गया था. सोमवार को चांदी 900 रुपये प्रति किलो सस्ती हुई थी. मंगलवार को सोना 170 रुपये सस्ता होकर अब 45743 रुपये प्रति 10 ग्राम पर आ गया है. चांदी 590 रुपये सस्ती हुई है. इसके पहले सोमवार को सोना 180 रुपये उछलकर 45913 रुपये प्रति 10 ग्राम पर पहुंच गया था. सोमवार को चांदी 900 रुपये प्रति किलो सस्ती हुई थी. मंगलवार को सोना 170 रुपये सस्ता होकर अब 45743 रुपये प्रति 10 ग्राम पर आ गया है. चांदी 590 रुपये सस्ती हुई है. इसके पहले सोमवार को सोना 180 रुपये उछलकर 45913 रुपये प्रति 10 ग्राम पर पहुंच गया था. सोमवार को चांदी 900 रुपये प्रति किलो सस्ती हुई थी.",
      likes:40,
      comments:16,
    },
    {
      newsId: 1,
      imgUrl : 'https://img.jakpost.net/c/2018/03/26/2018_03_26_42921_1522074009._large.jpg',
      newsTitle : 'Covid-19 News 2020',
      newsDesc : "Some quick example text to build on the card title and make up the bulk of the card's content. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear.",
      likes:38,
      comments:15,
    },
    {
      newsId: 2,
      imgUrl : 'https://img.medscapestatic.com/thumbnail_library/covid-comment-thumb_800x450.png',
      newsTitle : 'How is the COVID-19 Pandemic Affecting You?',
      newsDesc : "Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear.",
      likes:40,
      comments:16,
    },
    {
      newsId: 3,
      imgUrl : 'https://smedia2.intoday.in/aajtak/images/stories/092019/gold_reuters_750_1588672585_618x347.jpeg',
      newsTitle : 'लॉकडाउन 3.0 के बीच सस्ता हो गया सोना-चांदी , जानें कितना है आज का रेट',
      newsDesc : "मंगलवार को सोना 170 रुपये सस्ता होकर अब 45743 रुपये प्रति 10 ग्राम पर आ गया है. चांदी 590 रुपये सस्ती हुई है. इसके पहले सोमवार को सोना 180 रुपये उछलकर 45913 रुपये प्रति 10 ग्राम पर पहुंच गया था. सोमवार को चांदी 900 रुपये प्रति किलो सस्ती हुई थी. मंगलवार को सोना 170 रुपये सस्ता होकर अब 45743 रुपये प्रति 10 ग्राम पर आ गया है. चांदी 590 रुपये सस्ती हुई है. इसके पहले सोमवार को सोना 180 रुपये उछलकर 45913 रुपये प्रति 10 ग्राम पर पहुंच गया था. सोमवार को चांदी 900 रुपये प्रति किलो सस्ती हुई थी. मंगलवार को सोना 170 रुपये सस्ता होकर अब 45743 रुपये प्रति 10 ग्राम पर आ गया है. चांदी 590 रुपये सस्ती हुई है. इसके पहले सोमवार को सोना 180 रुपये उछलकर 45913 रुपये प्रति 10 ग्राम पर पहुंच गया था. सोमवार को चांदी 900 रुपये प्रति किलो सस्ती हुई थी.",
      likes:40,
      comments:16,
    },
    {
      newsId: 1,
      imgUrl : 'https://img.jakpost.net/c/2018/03/26/2018_03_26_42921_1522074009._large.jpg',
      newsTitle : 'Covid-19 News 2020',
      newsDesc : "Some quick example text to build on the card title and make up the bulk of the card's content. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear.",
      likes:38,
      comments:15,
    },
    {
      newsId: 2,
      imgUrl : 'https://img.medscapestatic.com/thumbnail_library/covid-comment-thumb_800x450.png',
      newsTitle : 'How is the COVID-19 Pandemic Affecting You?',
      newsDesc : "Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear.",
      likes:40,
      comments:16,
    },
    {
      newsId: 3,
      imgUrl : 'https://smedia2.intoday.in/aajtak/images/stories/092019/gold_reuters_750_1588672585_618x347.jpeg',
      newsTitle : 'लॉकडाउन 3.0 के बीच सस्ता हो गया सोना-चांदी , जानें कितना है आज का रेट',
      newsDesc : "मंगलवार को सोना 170 रुपये सस्ता होकर अब 45743 रुपये प्रति 10 ग्राम पर आ गया है. चांदी 590 रुपये सस्ती हुई है. इसके पहले सोमवार को सोना 180 रुपये उछलकर 45913 रुपये प्रति 10 ग्राम पर पहुंच गया था. सोमवार को चांदी 900 रुपये प्रति किलो सस्ती हुई थी. मंगलवार को सोना 170 रुपये सस्ता होकर अब 45743 रुपये प्रति 10 ग्राम पर आ गया है. चांदी 590 रुपये सस्ती हुई है. इसके पहले सोमवार को सोना 180 रुपये उछलकर 45913 रुपये प्रति 10 ग्राम पर पहुंच गया था. सोमवार को चांदी 900 रुपये प्रति किलो सस्ती हुई थी. मंगलवार को सोना 170 रुपये सस्ता होकर अब 45743 रुपये प्रति 10 ग्राम पर आ गया है. चांदी 590 रुपये सस्ती हुई है. इसके पहले सोमवार को सोना 180 रुपये उछलकर 45913 रुपये प्रति 10 ग्राम पर पहुंच गया था. सोमवार को चांदी 900 रुपये प्रति किलो सस्ती हुई थी.",
      likes:40,
      comments:16,
    },
    {
      newsId: 1,
      imgUrl : 'https://img.jakpost.net/c/2018/03/26/2018_03_26_42921_1522074009._large.jpg',
      newsTitle : 'Covid-19 News 2020',
      newsDesc : "Some quick example text to build on the card title and make up the bulk of the card's content. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear.",
      likes:38,
      comments:15,
    },
    {
      newsId: 2,
      imgUrl : 'https://img.medscapestatic.com/thumbnail_library/covid-comment-thumb_800x450.png',
      newsTitle : 'How is the COVID-19 Pandemic Affecting You?',
      newsDesc : "Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear. Tell us how you and your colleagues are dealing with the ongoing pandemic. Write your experiences, messages of gratitude for your peers, concerns, predictions for lasting effects on healthcare, or anything else you’d like us to hear.",
      likes:40,
      comments:16,
    },
    {
      newsId: 3,
      imgUrl : 'https://smedia2.intoday.in/aajtak/images/stories/092019/gold_reuters_750_1588672585_618x347.jpeg',
      newsTitle : 'लॉकडाउन 3.0 के बीच सस्ता हो गया सोना-चांदी , जानें कितना है आज का रेट',
      newsDesc : "मंगलवार को सोना 170 रुपये सस्ता होकर अब 45743 रुपये प्रति 10 ग्राम पर आ गया है. चांदी 590 रुपये सस्ती हुई है. इसके पहले सोमवार को सोना 180 रुपये उछलकर 45913 रुपये प्रति 10 ग्राम पर पहुंच गया था. सोमवार को चांदी 900 रुपये प्रति किलो सस्ती हुई थी. मंगलवार को सोना 170 रुपये सस्ता होकर अब 45743 रुपये प्रति 10 ग्राम पर आ गया है. चांदी 590 रुपये सस्ती हुई है. इसके पहले सोमवार को सोना 180 रुपये उछलकर 45913 रुपये प्रति 10 ग्राम पर पहुंच गया था. सोमवार को चांदी 900 रुपये प्रति किलो सस्ती हुई थी. मंगलवार को सोना 170 रुपये सस्ता होकर अब 45743 रुपये प्रति 10 ग्राम पर आ गया है. चांदी 590 रुपये सस्ती हुई है. इसके पहले सोमवार को सोना 180 रुपये उछलकर 45913 रुपये प्रति 10 ग्राम पर पहुंच गया था. सोमवार को चांदी 900 रुपये प्रति किलो सस्ती हुई थी.",
      likes:40,
      comments:16,
    },
  ]

  constructor() { }

}