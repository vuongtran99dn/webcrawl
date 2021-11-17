import cheerio from 'cheerio';
import axios from 'axios';
import  {scrapingInfoTruyen}  from './scrapinginfoTruyen.js'
import { scrapingListTruyen } from './scrapingListTruyen.js';
import { scrapingInfoChap } from './scrapingInfoChap.js';
var maxpage = 1;
var page = 1;
var list = []
list = await scrapingListTruyen(page,maxpage)
var listInfoTruyen = []
listInfoTruyen = await scrapingInfoTruyen(list)

var chooseTruyen = listInfoTruyen[0]

var chooseChap = chooseTruyen.listChap[0]

var docTruyen = await scrapingInfoChap(chooseChap)

console.log(docTruyen)
