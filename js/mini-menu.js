const mm = document.getElementById('mm');
mm.innerHTML = `

<div id="menu" style="width:100%;">
<span class="menu_list  mn1" onclick="window.location.href='./kl-a.html'" >손해평가사</span>
<span class="menu_list  mn2" onclick="window.location.href='./tarot-cards.html'" >타로심리상담사</span>
<span class="menu_list  mn3" onclick="window.location.href='./wedding.html'">결혼상담사</span><br>
<span  class="menu_list mn4" onclick="window.location.href='./bs.html'">베이비시터</span>
<span  class="menu_list mn5" onclick="window.location.href='./pia.html'">PIA사설탐정</span>
<span  class="menu_list mn6" onclick="window.location.href='./gbs.html'">간병사</span>

<br><br><br>
</div>

<div id="m-menu" style="width:100%;">
<span class="menu_list  mn1" onclick="window.location.href='./kl-a.html'">손해평가사</span>
<span class="menu_list  mn2" onclick="window.location.href='./tarot-cards.html'" >타로심리상담사</span><br>
<span class="menu_list  mn3" onclick="window.location.href='./wedding.html'">결혼상담사</span>

<span  class="menu_list mn4" onclick="window.location.href='./bs.html'">베이비시터</span><br>
<span  class="menu_list mn5" onclick="window.location.href='./pia.html'">PIA사설탐정</span>
<span  class="menu_list mn6" onclick="window.location.href='./gbs.html'">간병사</span>
<br><br>
</div>


`;

document.body.appendChild(mm.content);