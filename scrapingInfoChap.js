import cheerio from 'cheerio';
import axios from 'axios';
export async function scrapingInfoChap(truyen){
    var listLoad = []
    await axios.get(truyen.url).then((res) =>{
        const data = res.data;
        const $ = cheerio.load(data);
        var container =  $(data).find('.section-detail-story')
        var gallery = $(container).find('.container').find('img')
        gallery.each((i,e)=>{
            listLoad.push($(e).attr('data-src'))
        })
    })
    return listLoad
}
