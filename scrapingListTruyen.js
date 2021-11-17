import cheerio from 'cheerio';
import axios from 'axios';
export async function scrapingListTruyen(page,maxpage){
    var list = []
    while(page <= maxpage){
        const url = 'https://timtruyen.net/the-loai/action?page=' + page;
        await axios.get(url).then((res) =>{
        const data = res.data;
        const $ = cheerio.load(data);
        var ds = $(data).find("h3.title-book")
        ds.each(function(i,e){
          list.push({
            title: $(e).find('a').attr('title'),
            link: $(e).find('a').attr('href')
          })
        })
      })
      page++
    }
    return list
}