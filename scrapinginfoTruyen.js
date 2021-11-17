import cheerio from 'cheerio';
import axios from 'axios';
export async function scrapingInfoTruyen(tt){
    var listInfoTruyen = []
    for(var i = 0; i < tt.length; i++){
        await axios.get(tt[i].link).then((res) =>{
            const data = res.data;
            const $ = cheerio.load(data);
            var overView = $(data).find('.overview-story')
        
            var imgURL = $(overView).find('.img').find('img').attr('src')
        
            var text = $(overView).find('.text')
        
            var infoItem = $(text).find('.txt').find('.info-item')
            var info = []
            infoItem.each((i,e) =>{
            info.push($(e).text())
            })
        
            var thongKe = $(text).find('.txt').find('.sp01')
            var infoThongKe =[]
            thongKe.each((i,e) =>{
            infoThongKe.push($(e).text())
            })
        
            var listTag = $(text).find('.list-tag-story').find('li')
            var theLoai = []
            listTag.each((i,e)=>{
            theLoai.push($(e).text())
            })

            var storyDetail
            storyDetail = $(text).find('.story-detail-info').text()


            var listChap = []
            var chapterItem =  $(data).find('.chapter-item')
            chapterItem.each((i,e)=>{
                listChap.push({
                    chapter: $(e).find('a').text(),
                    url: $(e).find('a').attr('href'), 
                    time: $(e).find('.col-md-2').text()
                })

            })    
                    listInfoTruyen.push({
                    title: tt[i].title,
                    link: tt[i].link,
                    imgURL: imgURL,
                    info: info,
                    infoThongKe: infoThongKe,
                    theLoai: theLoai,
                    storyDetail: storyDetail,
                    listChap: listChap
                })
            })
            
        }
    return listInfoTruyen
}