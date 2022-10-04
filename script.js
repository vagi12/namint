function addname(value) {
  all += '<tr><td style="width: 25%;">' + value + '</td><td><a href=\'https://www.google.pl/search?q="' + value + '"\' target=_blank><i class="bi-google"></i> name</a></td><td><a href=\'https://www.google.com/search?q="' + value + '"&tbs=itp%3Aface&tbm=isch\' target=_blank><i class="bi-google"></i> <i class="bi bi-person-square"></i></a></td><td><a href=\'https://www.google.pl/search?q="' + value + '"+AND+(%E2%9C%86+OR+%E2%98%8E+OR+%E2%98%8F+OR+%F0%9F%93%B1+OR+%F0%9F%93%9E)\' target=_blank><i class="bi-google"></i> <i class="bi bi-telephone-fill"></i></a></td><td><a href=\'https://www.google.pl/search?q="' + value + '"+AND+(%F0%9F%93%A7+OR+%F0%9F%93%A8+OR+%F0%9F%93%A9+OR+✉)\' target=_blank><i class="bi-google"></i> <i class="bi bi-envelope"></i></a></td><td><a href=\'https://www.google.com/maps/search/"' + value + '"\' target=_blank alt="Search name on Google maps" title="Search name on Google maps"><i class="bi-google"></i><i class="bi bi-map"></i></a></td><td><a href=\'https://www.google.pl/search?q="' + value + '"+ext:pdf\' target=_blank alt="Search name in pdfs with Google" title="Search name in pdfs with Google"><i class="bi-google"></i><i class="bi bi-filetype-pdf"></i></a></td><td><a href=\'https://www.google.pl/search?q="' + value + '"+ext:docx\' target=_blank alt="Search name in docx files with Google" title="Search name in docx files with Google"><i class="bi-google"></i><i class="bi bi-filetype-docx"></i></a></td><td><a href=\'https://www.google.pl/search?q="' + value + '"+ext:xlsx\' target=_blank alt="Search name in xlsx files with Google" title="Search name in xlsx files with Google"><i class="bi-google"></i><i class="bi bi-filetype-xlsx"></i></a></td><td><a href=\'https://www.bing.com/search?q="' + value + '"\' target=_blank>Bing</a></td><td><a href=\'https://yandex.com/search/?text="' + value + '"\' target=_blank>Yandex</a></td><td><a href=\'https://yandex.com/images/search?text="' + value + '"&type=face\' target=_blank>Y <i class="bi bi-person-square"></i></a></td><td><a href=\'https://www.facebook.com/public/' + value + '\' target=_blank><i class="bi-facebook"></i></a></td><td><a href=\'https://twitter.com/search?q=' + value + '&src=typed_query&f=user\' target=_blank><i class="bi-twitter"></i></a></td><td><a href=\'https://www.tiktok.com/search/user?q="' + value + '"\' target=_blank><i class="bi-tiktok"></i></a></td><td><a href=\'https://www.flickr.com/search/people/?username="' + value + '"\' target=_blank alt="Search name on Flickr" title="Search name on Flickr"><i class="bi-camera2"></i></a></td><td><a href=\'https://vk.com/search?c%5Bname%5D=1&c%5Bper_page%5D=40&c%5Bq%5D=' + value + '&c%5Bsection%5D=people\' target=_blank>vk</td><td>';
  if (linum==0) {
    all += '<a href=\'https://www.linkedin.com/pub/dir?firstName=' + f + '&lastName=' + l + '&src=typed_query&f=user\' target=_blank><i class="bi-linkedin"></i></a>';
    linum++;
  }
  all += '</td></tr>';
}

function forname(value) {
  if (ornum==0) {ornum++;} else {orname += ' OR ';}
  orname += '"' + value + '"';
}

function addlogin(value) {
  all += '<tr><td style="width: 35%;">' + value + '</td><td><a href=\'https://www.google.pl/search?q="' + value + '"\' target=_blank>Google</a></td><td><a href=\'https://www.bing.com/search?q="' + value + '"\' target=_blank>Bing</a></td><td><a href=\'https://yandex.com/search/?text="' + value + '"\' target=_blank>Yandex</a></td><td><a href=\'https://www.google.pl/search?q="' + value + '@gmail.com"+OR+"' + value + '@outlook.com"+OR+"' + value + '@icloud.com"+OR+"' + value + '@yahoo.com"+OR+"' + value + '@protonmail.com"\' target=_blank><i class="bi-google"></i> common emails</a></td><td><a href=\'https://www.facebook.com/' + value + '\' target=_blank><i class="bi-facebook"></i></a></td><td><a href=\'https://twitter.com/' + value + '\' target=_blank><i class="bi-twitter"></i></a></td><td><a href=\'https://instagram.com/' + value + '\' target=_blank><i class="bi-instagram"></i></a></td><td><a href=\'https://www.tiktok.com/@' + value + '\' target=_blank><i class="bi-tiktok"></i></a></td><td><a href=\'https://www.twitch.tv/' + value + '\' target=_blank><i class="bi-twitch"></i></a></td><td><a href=\'https://whatsmyname.app/?q=' + value + '\' target=_blank>whatsmyname</a></td></tr>';
  vg = value + '@gmail.com';
  vo = value + '@outlook.com';
  vi = value + '@' + dom1;
  vy = value + '@' + dom2;
  vh = value + '@' + dom3;
  vm = value + '@' + dom4;
  grall += '<tr><td style="width: 35%;">' + value + '</td><td><img src="https://s.gravatar.com/avatar/' + md5(vg) + '"></td><td><img src="https://s.gravatar.com/avatar/' + md5(vo) + '"></td><td><img src="https://s.gravatar.com/avatar/' + md5(vi) + '"></td><td><img src="https://s.gravatar.com/avatar/' + md5(vy) + '"></td><td><img src="https://s.gravatar.com/avatar/' + md5(vh) + '"></td><td><img src="https://s.gravatar.com/avatar/' + md5(vm) + '"></td></tr>';
}

function openallfb(a) {
  all += 'window.open(\'https://facebook.com/public/' + a + '\',\'' + a + '\');';
}

function openalltw(a) {
  all += 'window.open(\'https://twitter.com/search?q=' + a + '&src=typed_query&f=user\',\'' + a + '\');';
}

function openalltt(a) {
  all += 'window.open(\'https://www.tiktok.com/search/user?q=' + a + '\',\'' + a + '\');';
}

function openallfl(a) {
  all += 'window.open(\'https://www.flickr.com/search/people/?username=' + a + '\',\'' + a + '\');';
}

function openallvk(a) {
  all += 'window.open(\'https://vk.com/search?c%5Bname%5D=1&c%5Bper_page%5D=40&c%5Bq%5D=' + a + '&c%5Bsection%5D=people\',\'' + a + '\');';
}

function mashup() {
  f = document.getElementById("first").value;
  m = document.getElementById("middle").value;
  l = document.getElementById("last").value;
  dom1 = encodeURI(document.getElementById("dom1").value);
  dom2 = encodeURI(document.getElementById("dom2").value);
  dom3 = encodeURI(document.getElementById("dom3").value);
  dom4 = encodeURI(document.getElementById("dom4").value);
  if (f==''||l=='') {document.getElementById("namint_result").innerHTML = '<div style="padding-top: 10px; font-weight:bold;">Enter at least first and last name above.</div>';}
  else {
    all = '<div style="padding-top: 10px; font-weight:bold;">Possible name patterns and search links:</div><div style="border: 1px solid #ddd;"><table class="table">';
    grall = '<tr><td>@</td><td>gmail.com</td><td>outlook.com</td><td>' + dom1 + '</td><td>' + dom2 + '</td><td>' + dom3 + '</td><td>' + dom4 + '</td></tr>';
    orname = '';
    ornum = 0;
    linum = 0;
    const p = [];
    const q = [];
    const r = [];
    const s = [];
    p[1] = f + ' ' + l;
    p[2] = f.substr(0,1) + '. ' + l;
    p[3] = l + ' ' + f;
    p[4] = l + ' ' + f.substr(0,1) + '.';
    p.forEach(forname);
    p[5] = l;
    p.forEach(addname);
    if (m.length>0) {
      q[1] = f + ' ' + m + ' ' + l;
      q[2] = f.substr(0,1) + '. ' + m.substr(0,1) + '. ' + l;
      q[3] = f + ' ' + m.substr(0,1) + '. ' + l;
      q[4] = l + ' ' + f + ' ' + m;
      q[5] = l + ' ' + f.substr(0,1) + '. ' + m.substr(0,1) + '.';
      q[6] = m + ' ' + l;
      q.forEach(addname);
      q.forEach(forname);
    }
    all += '<tr><td style="width: 25%; font-weight: bold;">ALL <span title="For FB / Twitter / Tiktok / Flickr / vk links to work properly, allow this site to open new tabs / windows"><i class="bi-info-circle"></i></span></td><td><a href=\'https://www.google.pl/search?q=' + orname + '\' target=_blank><i class="bi-google"></i> names</a></td><td><a href=\'https://www.google.pl/search?q=' + orname + '"&tbs=itp%3Aface&tbm=isch\' target=_blank><i class="bi-google"></i> <i class="bi bi-person-square"></i></a></td><td><a href=\'https://www.google.pl/search?q=(' + orname + ')+AND+(%E2%9C%86+OR+%E2%98%8E+OR+%E2%98%8F+OR+%F0%9F%93%B1+OR+%F0%9F%93%9E)\' target=_blank><i class="bi-google"></i> <i class="bi bi-telephone-fill"></i></a></td><td><a href=\'https://www.google.pl/search?q=(' + orname + ')+AND+(%F0%9F%93%A7+OR+%F0%9F%93%A8+OR+%F0%9F%93%A9+OR+✉)\' target=_blank><i class="bi-google"></i> <i class="bi bi-envelope"></i></a></td><td><a href=\'https://www.google.pl/maps/search/' + orname + '\' target=_blank alt="Search names on Google maps" title="Search names on Google maps"><i class="bi-google"></i><i class="bi bi-map"></i></a></td><td><a href=\'https://www.google.pl/search?q="' + orname + '"+ext:pdf\' target=_blank alt="Search name in pdfs with Google" title="Search name in pdfs with Google"><i class="bi-google"></i><i class="bi bi-filetype-pdf"></i></a></td><td><a href=\'https://www.google.pl/search?q="' + orname + '"+ext:docx\' target=_blank alt="Search name in docx files with Google" title="Search name in docx files with Google"><i class="bi-google"></i><i class="bi bi-filetype-docx"></i></a></td><td><a href=\'https://www.google.pl/search?q="' + orname + '"+ext:xlsx\' target=_blank alt="Search name in xlsx files with Google" title="Search name in xlsx files with Google"><i class="bi-google"></i><i class="bi bi-filetype-xlsx"></i></a></td><td><a href=\'https://www.bing.com/search?q=' + orname + '\' target=_blank>Bing</a></td><td><a href=\'https://yandex.com/search/?text=' + orname + '\' target=_blank>Yandex</a></td><td><a href=\'https://yandex.com/images/search?text=' + orname + '&type=face\' target=_blank>Y <i class="bi bi-person-square"></i></a></td><td><a href=# onclick="';
    p.forEach(openallfb);    
    all += '"><i class="bi-facebook"></i></a></td><td><a href=# onclick="';
    p.forEach(openalltw);
    all += '"><i class="bi-twitter"></i></a></td><td><a href=# onclick="';
    p.forEach(openalltt);
    all += '"><i class="bi-tiktok"></i></a></td><td><a href=# onclick="';
    p.forEach(openallfl);
    all += '" alt="Search name on Flickr" title="Search names on Flickr"><i class="bi-camera2"></i></a></td><td><a href=# onclick="';
    p.forEach(openallvk);
    all += '">vk</a></td><td><a href=\'https://www.google.pl/search?q=' + orname + ' site:pastebin.com\' target=_blank alt="Search names on pastebin" title="Search names on pastebin"><i class="bi bi-file-earmark-binary"></i></a></td></tr>';
    all += '</table></div><div style="padding-top: 10px; font-weight:bold;">Possible login patterns and search links:</div><div style="border: 1px solid #ddd;"><table class="table">';
    r[1] = f.toLowerCase() + '.' + l.toLowerCase();
    r[2] = l.toLowerCase() + '.' + f.toLowerCase();
    r[3] = f.substr(0,1).toLowerCase() + '.' + l.toLowerCase();
    r[4] = l.toLowerCase() + '.' + f.substr(0,1).toLowerCase();
    r[5] = f.toLowerCase() + l.toLowerCase();
    r[6] = l.toLowerCase() + f.toLowerCase();
    r[7] = f.substr(0,1).toLowerCase() + l.toLowerCase();
    r[8] = l.toLowerCase() + f.substr(0,1).toLowerCase();
    r[9] = f.toLowerCase() + l.substr(0,1).toLowerCase();
    r[10] = f.toLowerCase() + '.' + l.substr(0,1).toLowerCase();
    r[11] = f.toLowerCase();
    r[12] = l.toLowerCase();    
    r.forEach(addlogin);
    if (m.length>0) {
      s[1] = f.toLowerCase() + m.toLowerCase() + l.toLowerCase();
      s[2] = l.toLowerCase() + f.toLowerCase() + m.toLowerCase();
      s[3] = f.toLowerCase() + m.substr(0,1).toLowerCase() + l.toLowerCase();
      s[4] = f.substr(0,1).toLowerCase() + m.substr(0,1).toLowerCase() + l.toLowerCase();
      s[5] = l.toLowerCase() + f.substr(0,1).toLowerCase() + m.substr(0,1).toLowerCase();
      s[6] = m.toLowerCase() + l.toLowerCase();
      s[7] = l.toLowerCase() + m.toLowerCase();
      s[8] = m.toLowerCase();
      s.forEach(addlogin);
    }  
    all += '</table></div><div style="padding-top: 10px; font-weight:bold;">Gravatars for logins at different email providers:</div><div style="border: 1px solid #ddd;"><table class="table">';
    all += grall;
    all += '</table></div>';
    document.getElementById("namint_result").innerHTML = all;
  } 
}

function domdefault() {
  document.getElementById("dom1").value = "icloud.com";
  document.getElementById("dom2").value = "yahoo.com";
  document.getElementById("dom3").value = "hotmail.com";
  document.getElementById("dom4").value = "msn.com";
}