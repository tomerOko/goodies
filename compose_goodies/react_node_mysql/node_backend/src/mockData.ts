interface Clients {
    id:number,
    first_name: string ,
    last_name: string ,
    email: string ,
    gender: string ,
    ip_address: string ,
}

const mock_Data : {data: Clients[]} = {data: [{"id":1,"first_name":"Helena","last_name":"Lawther","email":"hlawther0@hatena.ne.jp","gender":"Bigender","ip_address":"54.36.205.167"},
{"id":2,"first_name":"Jule","last_name":"Coppin","email":"jcoppin1@i2i.jp","gender":"Genderfluid","ip_address":"107.185.124.15"},
{"id":3,"first_name":"Phillis","last_name":"Bollen","email":"pbollen2@icq.com","gender":"Polygender","ip_address":"141.30.108.125"},
{"id":4,"first_name":"Cristabel","last_name":"Boays","email":"cboays3@time.com","gender":"Agender","ip_address":"223.115.233.110"},
{"id":5,"first_name":"Clarisse","last_name":"Shatliff","email":"cshatliff4@senate.gov","gender":"Polygender","ip_address":"208.87.80.92"},
{"id":6,"first_name":"Kalvin","last_name":"Leyborne","email":"kleyborne5@jiathis.com","gender":"Female","ip_address":"1.58.221.172"},
{"id":7,"first_name":"Katrine","last_name":"Salzburger","email":"ksalzburger6@blogtalkradio.com","gender":"Non-binary","ip_address":"121.98.172.41"},
{"id":8,"first_name":"Isadore","last_name":"Cawthera","email":"icawthera7@ebay.co.uk","gender":"Polygender","ip_address":"55.213.89.219"},
{"id":9,"first_name":"Lanna","last_name":"Beatey","email":"lbeatey8@ucoz.ru","gender":"Bigender","ip_address":"134.24.131.171"},
{"id":10,"first_name":"Eydie","last_name":"MacDuff","email":"emacduff9@ucsd.edu","gender":"Non-binary","ip_address":"139.52.10.15"},
{"id":11,"first_name":"Shelley","last_name":"Vasyukhichev","email":"svasyukhicheva@earthlink.net","gender":"Genderqueer","ip_address":"179.7.204.100"},
{"id":12,"first_name":"Karoline","last_name":"Orknay","email":"korknayb@indiatimes.com","gender":"Genderqueer","ip_address":"167.252.113.164"},
{"id":13,"first_name":"Hirsch","last_name":"Dobinson","email":"hdobinsonc@umn.edu","gender":"Genderqueer","ip_address":"28.144.97.240"},
{"id":14,"first_name":"Michaela","last_name":"Blackbourn","email":"mblackbournd@about.com","gender":"Agender","ip_address":"114.5.202.10"},
{"id":15,"first_name":"Carley","last_name":"Sirman","email":"csirmane@businessweek.com","gender":"Male","ip_address":"62.164.208.72"},
{"id":16,"first_name":"Aurelie","last_name":"Anthona","email":"aanthonaf@jalbum.net","gender":"Male","ip_address":"202.182.189.155"},
{"id":17,"first_name":"Rodd","last_name":"Mitchenson","email":"rmitchensong@ask.com","gender":"Agender","ip_address":"171.47.114.225"},
{"id":18,"first_name":"Kai","last_name":"Helks","email":"khelksh@unc.edu","gender":"Genderqueer","ip_address":"19.37.181.94"},
{"id":19,"first_name":"Brok","last_name":"D'Aulby","email":"bdaulbyi@comcast.net","gender":"Non-binary","ip_address":"74.54.45.107"},
{"id":20,"first_name":"Illa","last_name":"Skamell","email":"iskamellj@cbc.ca","gender":"Non-binary","ip_address":"23.201.163.6"},
{"id":21,"first_name":"Pepe","last_name":"Novis","email":"pnovisk@washington.edu","gender":"Female","ip_address":"133.146.63.80"},
{"id":22,"first_name":"Alan","last_name":"Monnelly","email":"amonnellyl@blogs.com","gender":"Agender","ip_address":"213.146.26.167"},
{"id":23,"first_name":"Viviyan","last_name":"Huggard","email":"vhuggardm@china.com.cn","gender":"Genderqueer","ip_address":"189.75.251.72"},
{"id":24,"first_name":"Eduard","last_name":"Obern","email":"eobernn@g.co","gender":"Agender","ip_address":"177.78.246.19"},
{"id":25,"first_name":"Spike","last_name":"Lippingwell","email":"slippingwello@harvard.edu","gender":"Genderfluid","ip_address":"44.78.172.185"},
{"id":26,"first_name":"Aldus","last_name":"Kinahan","email":"akinahanp@technorati.com","gender":"Female","ip_address":"248.209.39.208"},
{"id":27,"first_name":"Jaime","last_name":"New","email":"jnewq@reference.com","gender":"Bigender","ip_address":"34.36.239.164"},
{"id":28,"first_name":"Stafani","last_name":"Hunte","email":"shunter@nydailynews.com","gender":"Genderfluid","ip_address":"3.161.141.232"},
{"id":29,"first_name":"Aurie","last_name":"Weepers","email":"aweeperss@so-net.ne.jp","gender":"Male","ip_address":"5.206.141.69"},
{"id":30,"first_name":"Whittaker","last_name":"Cadden","email":"wcaddent@umn.edu","gender":"Female","ip_address":"75.79.177.204"},
{"id":31,"first_name":"Viv","last_name":"Waison","email":"vwaisonu@networksolutions.com","gender":"Non-binary","ip_address":"177.221.202.60"},
{"id":32,"first_name":"Nisse","last_name":"Rispen","email":"nrispenv@theglobeandmail.com","gender":"Female","ip_address":"46.117.141.182"},
{"id":33,"first_name":"Fons","last_name":"Witter","email":"fwitterw@nasa.gov","gender":"Genderqueer","ip_address":"104.31.14.8"},
{"id":34,"first_name":"Tate","last_name":"Meugens","email":"tmeugensx@house.gov","gender":"Polygender","ip_address":"243.29.237.219"},
{"id":35,"first_name":"Edeline","last_name":"Slisby","email":"eslisbyy@blogspot.com","gender":"Non-binary","ip_address":"87.198.182.25"},
{"id":36,"first_name":"Rex","last_name":"Tillerton","email":"rtillertonz@imgur.com","gender":"Genderqueer","ip_address":"114.221.26.52"},
{"id":37,"first_name":"Tomas","last_name":"Dillow","email":"tdillow10@last.fm","gender":"Male","ip_address":"60.154.171.77"},
{"id":38,"first_name":"Lisabeth","last_name":"Mullaney","email":"lmullaney11@angelfire.com","gender":"Male","ip_address":"176.105.71.80"},
{"id":39,"first_name":"Konstanze","last_name":"Garlette","email":"kgarlette12@dailymotion.com","gender":"Polygender","ip_address":"62.178.135.86"},
{"id":40,"first_name":"Matthaeus","last_name":"Witch","email":"mwitch13@joomla.org","gender":"Bigender","ip_address":"112.35.31.195"},
{"id":41,"first_name":"Shem","last_name":"Linger","email":"slinger14@addthis.com","gender":"Agender","ip_address":"130.161.182.10"},
{"id":42,"first_name":"Frederich","last_name":"Flute","email":"fflute15@walmart.com","gender":"Male","ip_address":"183.48.104.234"},
{"id":43,"first_name":"Sauncho","last_name":"Tofano","email":"stofano16@lulu.com","gender":"Genderqueer","ip_address":"152.255.170.178"},
{"id":44,"first_name":"Thadeus","last_name":"Whichelow","email":"twhichelow17@com.com","gender":"Genderfluid","ip_address":"238.198.73.188"},
{"id":45,"first_name":"Agretha","last_name":"Lambirth","email":"alambirth18@time.com","gender":"Male","ip_address":"176.131.178.164"},
{"id":46,"first_name":"Bogart","last_name":"Hobson","email":"bhobson19@weebly.com","gender":"Bigender","ip_address":"138.87.55.121"},
{"id":47,"first_name":"Delphine","last_name":"Guiden","email":"dguiden1a@dailymail.co.uk","gender":"Agender","ip_address":"205.48.192.131"},
{"id":48,"first_name":"Yasmin","last_name":"Mead","email":"ymead1b@redcross.org","gender":"Male","ip_address":"227.169.142.162"},
{"id":49,"first_name":"Bald","last_name":"Chidley","email":"bchidley1c@ustream.tv","gender":"Bigender","ip_address":"153.148.252.137"},
{"id":50,"first_name":"Colline","last_name":"Eastcourt","email":"ceastcourt1d@w3.org","gender":"Bigender","ip_address":"191.60.131.238"}]};
export {mock_Data, Clients};