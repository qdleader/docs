import{_ as n,o as i,c as e,d}from"./app-ZRLx3Eaw.js";const l={},s=d(`<h1 id="http002-常见http响应状态码" tabindex="-1"><a class="header-anchor" href="#http002-常见http响应状态码" aria-hidden="true">#</a> http002-常见http响应状态码</h1><h2 id="常见总结" tabindex="-1"><a class="header-anchor" href="#常见总结" aria-hidden="true">#</a> 常见总结</h2><blockquote><p>200: 请求被正常处理 204：请求被受理但没有资源可以返回 206：客户端只是请求资源的一部分，服务器只对请求的部分资源执行GET方法，相应报文中通过Content-Range指定范围的资源。 301：永久性重定向 302：临时重定向 303：与302状态码有相似功能，只是它希望客户端在请求一个URI的时候，能通过GET方法重定向到另一个URI上 304：发送附带条件的请求时，条件不满足时返回，与重定向无关 307：临时重定向，与302类似，只是强制要求使用POST方法 400：请求报文语法有误，服务器无法识别 401：请求需要认证 403：请求的对应资源禁止被访问 404：服务器无法找到对应资源 500：服务器内部错误 503：服务器正忙</p></blockquote><h2 id="详情" tabindex="-1"><a class="header-anchor" href="#详情" aria-hidden="true">#</a> 详情</h2><p>参考《RESTful WebServices》 一书</p><h2 id="_1xx-通知" tabindex="-1"><a class="header-anchor" href="#_1xx-通知" aria-hidden="true">#</a> 1XX：通知</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1XX系列响应代码仅在与HTTP服务器沟通时使用。

100(&quot;Continue&quot;)
重要程度：中等，但（写操作时）很少用。
这是对HTTP LBYL（look-before-you-leap）请求的一个可能的响应。该响应代码表明：客户端应重新发送初始请求，并在请求中附上第一次请求时未提供的（可能很大或者包含敏感信息的）表示。客户端这次发送的请求不会被拒绝。对LBYL请求的另一个可能的响应是417(&quot;Expectation Failed&quot;)。

请求报头：要做一个LBYL请求，客户端必须把Expect请求报头设为字符串&quot;100-continue&quot;。除此以外，客户端还需要设置其他一些报头，服务器将根据这些报头决定是响应100还是417。

101(&quot;Switching Protocols&quot;)
重要程度：非常低。
当客户端通过在请求里使用Upgrade报头，以通知服务器它想改用除HTTP协议之外的其他协议时，客户端将获得此响应代码。101响应代码表示“行，我现在改用另一个协议了”。通常HTTP客户端会在收到服务器发来的101响应后关闭与服务器的TCP连接。101响应代码意味着，该客户端不再是一个HTTP客户端，而将成为另一种客户端。
尽管可以通过Upgrade报头从HTTP切换到HTTPS，或者从HTTP1.1切换到某个未来的版本，但实际使用Upgrade报头的情况比较少。Upgrade报头也可用于HTTP切换到一个完全不同的协议（如IRC）上，但那需要在Web服务器切换为一个IRC服务器的同时，Web客户端切换为一个IRC的客户端，因为服务器将立刻在同一个TCP连接上开始使用新的协议。

请求报头：客户端把Upgrade报头设置为一组希望使用的协议。
响应报头：如果服务器同意切换协议，它就返回一个Upgrade报头，说明它将切换到那个协议，并附上一个空白行。服务器不用关闭TCP链接，而是直接在该TCP连接上开始使用新的协议。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2xx-成功" tabindex="-1"><a class="header-anchor" href="#_2xx-成功" aria-hidden="true">#</a> 2XX: 成功</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2XX系列响应代码表明操作成功了。

200(&quot;OK&quot;)
重要程度：非常高。
一般来说，这是客户端希望看到的响应代码。它表示服务器成功执行了客户端所请求的动作，并且在2XX系列里没有其他更适合的响应代码了。

实体主体：对于GET请求，服务器应返回客户端所请求资源的一个表示。对于其他请求，服务器应返回当前所选资源的一个表示，或者刚刚执行的动作的一个描述。

-201(&quot;Created&quot;)
重要程度：高。

当服务器依照客户端的请求创建了一个新资源时，发送此响应代码。

响应报头：Location报头应包含指向新创建资源的规范URI。
实体主体：应该给出新创建资源的描述与链接。若已经在Location报头里给出了新资源的URI，那么可以用新资源的一个表示作为实体主体。

-202(&quot;Accepted&quot;)
重要程度：中等。

客户端的请求无法或将不被实时处理。请求稍后会被处理。请求看上去是合法的，但在实际处理它时有出现问题的可能。
若一个请求触发了一个异步操作，或者一个需要现实世界参与的动作，或者一个需要很长时间才能完成且没必要让Web客户端一直等待的动作时，这个相应代码是一个合适的选择。

响应报头：应该把未处理完的请求暴露为一个资源，以便客户端稍后查询其状态。Location报头可以包含指向该资源的URI。
实体主体：若无法让客户端稍后查询请求的状态，那么至少应该提供一个关于何时能处理该请求的估计。

203(&quot;Non-Authoritative Information&quot;)
重要程度：非常低。
这个响应代码跟200一样，只不过服务器想让客户端知道，有些响应报头并非来自该服务器--他们可能是从客户端先前发送的一个请求里复制的，或者从第三方得到的。

响应报头：客户端应明白某些报头可能是不准确的，某些响应报头可能不是服务器自己生成的，所以服务器也不知道其含义。

204(&quot;No Content&quot;)
重要程度：高。
若服务器拒绝对PUT、POST或者DELETE请求返回任何状态信息或表示，那么通常采用此响应代码。服务器也可以对GET请求返回此响应代码，这表明“客户端请求的资源存在，但其表示是空的”。注意与304(&quot;Not Modified&quot;)的区别。204常常用在Ajax应用里。服务器通过这个响应代码告诉客户端：客户端的输入已被接受，但客户端不应该改变任何UI元素。

实体主体：不允许。

205(&quot;Reset Content&quot;)
重要程度：低。
它与204类似，但与204不同的是，它表明客户端应重置数据源的视图或数据结构。假如你在浏览器里提交一个HTML表单，并得到响应代码204，那么表单里的各个字段值不变，可以继续修改它们；但假如得到的响应代码205，那么表单里的各个字段将被重置为它们的初始值。从数据录入方面讲：204适合对单条记录做一系列编辑，而205适于连续输入一组记录。

206(&quot;Partial Content&quot;)
重要程度：对于支持部分GET（partial GET）的服务而言“非常高”，其他情况下“低”。
它跟200类似，但它用于对部分GET请求（即使用Range请求报头的GET请求）的响应。部分GET请求常用于大型二进制文件的断点续传。

请求报头：客户端为Range请求报头设置一个值。
响应报头：需要提供Date报头。ETag报头与Content-Location报头的值应该跟正常GET请求相同。

若实体主体是单个字节范围（byte range），那么HTTP响应里必须包含一个Content-Range报头，以说明本响应返回的是表示的哪个部分，若实体主体是一个多部分实体（multipart entity）（即该实体主体由多个字节范围构成），那么每一个部分都要有自己的Content-Range报头。
实体主体：不是整个表示，而是一个或者多个字节范围。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3xx-重定向" tabindex="-1"><a class="header-anchor" href="#_3xx-重定向" aria-hidden="true">#</a> 3XX 重定向</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
3XX系列响应代码表明：客户端需要做些额外工作才能得到所需要的资源。它们通常用于GET请求。他们通常告诉客户端需要向另一个URI发送GET请求，才能得到所需的表示。那个URI就包含在Location响应报头里。

300(&quot;Multiple Choices&quot;)
重要程度：低。
若被请求的资源在服务器端存在多个表示，而服务器不知道客户端想要的是哪一个表示时，发送这个响应代码。或者当客户端没有使用Accept-*报头来指定一个表示，或者客户端所请求的表示不存在时，也发送这个响应代码。在这种情况下，一种选择是，服务器返回一个首选表示，并把响应代码设置为200，不过它也可以返回一个包含该资源各个表示的URI列表，并把响应代码设为300。

响应报头：如果服务器有首选表示，那么它可以在Location响应报头中给出这个首选表示的URI。跟其他3XX响应代码一样，客户端可以自动跟随Location中的URI。
实体主体：一个包含该资源各个表示的URI的列表。可以在表示中提供一些信息，以便用户作出选择。

301(&quot;Moved Permanently&quot;)
重要程度：中等。
服务器知道客户端试图访问的是哪个资源，但它不喜欢客户端用当前URI来请求该资源。它希望客户端记住另一个URI，并在今后的请求中使用那个新的URI。你可以通过这个响应代码来防止由于URI变更而导致老URI失效。

响应报头：服务器应当把规范URI放在Location响应报头里。
实体主体：服务器可以发送一个包含新URI的信息，不过这不是必需的。

302(&quot;Found&quot;)
重要程度：应该了解，特别市编写客户端时。但我不推荐使用它。
这个响应代码市造成大多数重定向方面的混乱的最根本原因。它应该是像307那样被处理。实际上，在HTTP 1.0中，响应代码302的名称是”Moved Temporarily”，不幸的是，在实际生活中，绝大多数客户端拿它像303一样处理。它的不同之处在于当服务器为客户端的PUT，POST或者DELETE请求返回302响应代码时，客户端要怎么做。
为了消除这一混淆，在HTTP 1.1中，该响应代码被重命名为&quot;Found&quot;，并新加了一个响应代码307。这个响应代码目前仍在广泛使用，但它的含义市混淆的，所以我建议你的服务发送307或者303，而不要发送302.除非你知道正在与一个不能理解303或307的HTTP 1.0客户端交互。

响应报头：把客户端应重新请求的那个URI放在Location报头里。
实体主体：一个包含指向新URI的链接的超文本文档（就像301一样）。

303(&quot;See Other&quot;)
重要程度：高。
请求已经被处理，但服务器不是直接返回一个响应文档，而是返回一个响应文档的URI。该响应文档可能是一个静态的状态信息，也可能是一个更有趣的资源。对于后一种情况，303是一种令服务器可以“发送一个资源的表示，而不强迫客户端下载其所有数据”的方式。客户端可以向Location报头里的URI发送GET请求，但它不是必须这么做。
303响应代码是一种规范化资源URI的好办法。一个资源可以有多个URIs，但每个资源的规范URI只有一个，该资源的所有其他URIs都通过303指向该资源的规范URI，例如：303可以把一个对http://www.example.com/software/current.tar.gz的请求重定向到http://www.example.com/software/1.0.2.tar.gz。

响应报头：Location报头里包含资源的URI。
实体主体：一个包含指向新URI的链接的超文本文档。

304(&quot;Not Modified&quot;)
重要程度：高。
这个响应代码跟204(&quot;No Content&quot;)类似：响应实体主体都必须为空。但204用于没有主体数据的情况，而304用于有主体数据，但客户端已拥有该数据，没必要重复发送的情况。这个响应代码可用于条件HTTP请求（conditional HTTP request).如果客户端在发送GET请求时附上了一个值为Sunday的If-Modified-Since报头，而客户端所请求的表示在服务器端自星期日（Sunday）以来一直没有改变过，那么服务器可以返回一个304响应。服务器也可以返回一个200响应，但由于客户端已拥有该表示，因此重复发送该表示只会白白浪费宽带。

响应报头：需要提供Date报头。Etag与Content-Location报头的值，应该跟返回200响应时的一样。若Expires, Cache-Control及Vary报头的值自上次发送以来已经改变，那么就要提供这些报头。
实体主体：不允许。

305(&quot;Use Proxy&quot;)
重要程度：低。
这个响应代码用于告诉客户端它需要再发一次请求，但这次要通过一个HTTP代理发送，而不是直接发送给服务器。这个响应代码使用的不多，因为服务器很少在意客户端是否使用某一特定代理。这个代码主要用于基于代理的镜像站点。现在，镜像站点（如http://www.example.com.mysite.com/）包含跟原始站点（如 http://www.example.com/）一样的内容，但具有不同的URI，原始站点可以通过307把客户端重新定向到镜像站点上。假如有基于代理的镜像站点，那么你可以通过把 http://proxy.mysite.com/设为代理，使用跟原始URI（http://www.example.com/）一样的URI来访问镜像站点。这里，原始站点example.com可以通过305把客户端路由到一个地理上接近客户端的镜像代理。web浏览器一般不能正确处理这个响应代码，这是导致305响应代码用的不多的另一个原因。

响应报头：Location报头里包含代理的URI。

306 未使用
重要程度：无
306 响应代码没有在HTTP标准中定义过。

307(&quot;Temporary Redirect&quot;)
重要程度：高。
请求还没有被处理，因为所请求的资源不在本地：它在另一个URI处。客户端应该向那个URI重新发送请求。就GET请求来说，它只是请求得到一个表示，该响应代码跟303没有区别。当服务器希望把客户端重新定向到一个镜像站点时，可以用307来响应GET请求。但对于POST，PUT及DELETE请求，它们希望服务器执行一些操作，307和303有显著区别。对POST，PUT或者DELETE请求响应303表明：操作已经成功执行，但响应实体将不随本响应一起返回，若客户端想要获取响应实体主体，它需要向另一个URI发送GET请求。而307表明：服务器尚未执行操作，客户端需要向Location报头里的那个URI重新提交整个请求。

响应报头： 把客户端应重新请求的那个URI放在Location报头里。
实体主体：一个包含指向新URI的链接的超文本文档。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4xx-客户端错误" tabindex="-1"><a class="header-anchor" href="#_4xx-客户端错误" aria-hidden="true">#</a> 4XX：客户端错误</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>这些响应代码表明客户端出现错误。不是认证信息有问题，就是表示格式或HTTP库本身有问题。客户端需要自行改正。

400(&quot;Bad Request&quot;)
重要程度：高。
这是一个通用的客户端错误状态，当其他4XX响应代码不适用时，就采用400。此响应代码通常用于“服务器收到客户端通过PUT或者POST请求提交的表示，表示的格式正确，但服务器不懂它什么意思”的情况。

实体主体：可以包含一个错误的描述文档。


401(&quot;Unauthorized&quot;)
重要程度：高。
客户端试图对一个受保护的资源进行操作，却又没有提供正确的认证证书。客户端提供了错误的证书，或者根本没有提供证书。这里的证书（credential）可以是一个用户名/密码，也可以市一个API key，或者一个认证令牌。客户端常常通过向一个URI发送请求，并查看收到401响应，以获知应该发送哪种证书，以及证书的格式。如果服务器不想让未授权的用户获知某个资源的存在，那么它可以谎报一个404而不是401。这样做的缺点是：客户端需要事先知道服务器接受哪种认证--这将导致HTTP摘要认证无法工作。

响应报头：WWW-Authenticate报头描述服务器将接受哪种认证。
实体主体：一个错误的描述文档。假如最终用户可通过“在网站上注册”的方式得到证书，那么应提供一个指向该注册页面的链接。

402(&quot;Payment Required&quot;)
重要程度：无。
除了它的名字外，HTTP标准没有对该响应的其他方面作任何定义。因为目前还没有用于HTTP的微支付系统，所以它被留作将来使用。尽管如此，若存在一个用于HTTP的微支付系统，那么这些系统将首先出现在web服务领域。如果想按请求向用户收费，而且你与用户之间的关系允许这么做的话，那么或许用得上这个响应代码。
注：该书印于2008年

403(&quot;Forbidden&quot;)
重要程度：中等。
客户端请求的结构正确，但是服务器不想处理它。这跟证书不正确的情况不同--若证书不正确，应该发送响应代码401。该响应代码常用于一个资源只允许在特定时间段内访问，
或者允许特定IP地址的用户访问的情况。403暗示了所请求的资源确实存在。跟401一样，若服务器不想透露此信息，它可以谎报一个404。既然客户端请求的结构正确，那为什么还要把本响应代码放在4XX系列（客户端错误），而不是5XX系列（服务端错误）呢？因为服务器不是根据请求的结构，而是根据请求的其他方面（比如说发出请求的时间）作出的决定的。

实体主体：一个描述拒绝原因的文档（可选）。

404(&quot;Not Found&quot;)
重要程度：高。
这也许是最广为人知的HTTP响应代码了。404表明服务器无法把客户端请求的URI转换为一个资源。相比之下，410更有用一些。web服务可以通过404响应告诉客户端所请求的URI是空的，然后客户端就可以通过向该URI发送PUT请求来创建一个新资源了。但是404也有可能是用来掩饰403或者401.

405(&quot;Method Not Allowd&quot;)
重要程度：中等。
客户端试图使用一个本资源不支持的HTTP方法。例如：一个资源只支持GET方法，但是客户端使用PUT方法访问。

响应报头：Allow报头列出本资源支持哪些HTTP方法，例如：Allow：GET，POST

406(&quot;Not Acceptable&quot;)
重要程度：中等。
当客户端对表示有太多要求，以至于服务器无法提供满足要求的表示，服务器可以发送这个响应代码。例如：客户端通过Accept头指定媒体类型为application/json+hic，但是服务器只支持application/json。服务器的另一个选择是：忽略客户端挑剔的要求，返回首选表示，并把响应代码设为200。

实体主体：一个可选表示的链接列表。

407(&quot;Proxy Authentication Required&quot;)
重要程度：低。
只有HTTP代理会发送这个响应代码。它跟401类似，唯一区别在于：这里不是无权访问web服务，而是无权访问代理。跟401一样，可能是因为客户端没有提供证书，也可能是客户端提供的证书不正确或不充分。

请求报头：客户端通过使用Proxy-Authorization报头（而不是Authorization）把证书提供给代理。格式跟Authrization一样。
响应报头：代理通过Proxy-Authenticate报头（而不是WWW-Authenticate）告诉客户端它接受哪种认证。格式跟WWW-Authenticate一样。

408(&quot;Reqeust Timeout&quot;)
重要程度：低。
假如HTTP客户端与服务器建立链接后，却不发送任何请求（或从不发送表明请求结束的空白行），那么服务器最终应该发送一个408响应代码，并关闭此连接。

409(&quot;Conflict&quot;)
重要程度：高。
此响应代码表明：你请求的操作会导致服务器的资源处于一种不可能或不一致的状态。例如你试图修改某个用户的用户名，而修改后的用户名与其他存在的用户名冲突了。

响应报头：若冲突是因为某个其他资源的存在而引起的，那么应该在Location报头里给出那个资源的URI。
实体主体：一个描述冲突的文档，以便客户端可以解决冲突。

410(&quot;Gone&quot;)
重要程度：中等。
这个响应代码跟404类似，但它提供的有用信息更多一些。这个响应代码用于服务器知道被请求的URI过去曾指向一个资源，但该资源现在不存在了的情况。服务器不知道
该资源的新URI，服务器要是知道该URI的话，它就发送响应代码301.410和310一样，都有暗示客户端不应该再请求该URI的意思，不同之处在于：410只是指出该资源不存在，但没有给出该资源的新URI。RFC2616建议“为短期的推广服务，以及属于个人但不继续在服务端运行的资源”采用410.

411(&quot;Length Required&quot;)
重要程度：低到中等。
若HTTP请求包含表示，它应该把Content-Length请求报头的值设为该表示的长度（以字节为单位）。对客户端而言，有时这不太方便（例如，当表示是来自其他来源的字节流时）。
所以HTTP并不要求客户端在每个请求中都提供Content-Length报头。但HTTP服务器可以要求客户端必须设置该报头。服务器可以中断任何没有提供Content-Length报头的请求，并要求客户端重新提交包含Content-Length报头的请求。这个响应代码就是用于中断未提供Content-Lenght报头的请求的。假如客户端提供错误的长度，或发送超过长度的表示，服务器可以中断请求并关闭链接，并返回响应代码413。

412(&quot;Precondition Failed&quot;)
重要程度：中等。
客户端在请求报头里指定一些前提条件，并要求服务器只有在满足一定条件的情况下才能处理本请求。若服务器不满足这些条件，就返回此响应代码。If-Unmodified-Since是一个常见的前提条件。客户端可以通过PUT请求来修改一个资源，但它要求，仅在自客户端最后一次获取该资源后该资源未被别人修改过才能执行修改操作。若没有这一前提条件，客户端可能会无意识地覆盖别人做的修改，或者导致409的产生。

请求报头：若客户但设置了If-Match，If-None-Match或If-Unmodified-Since报头，那就有可能得到这个响应代码。If-None-Match稍微特别一些。若客户端在发送GET或HEAD请求时指定了If-None-Match，并且服务器不满足该前提条件的话，那么响应代码不是412而是304，这是实现条件HTTP GET的基础。若客户端在发送PUT，POST或DELETE请求时指定了If-None-Match,并且服务器不满足该前提条件的话，那么响应代码是412.另外，若客户端指定了If-Match或If-Unmodified-Since(无论采用什么HTTP方法)，而服务器不满足该前提条件的话，响应代码也是412。

413(&quot;Request Entity Too Large&quot;)
重要程度：低到中等。
这个响应代码跟411类似，服务器可以用它来中断客户端的请求并关闭连接，而不需要等待请求完成。411用于客户端未指定长度的情况，而413用于客户端发送的表示太大，以至于服务器无法处理。客户端可以先做一个LBYL（look-before-you-leap）请求，以免请求被413中断。若LBYL请求获得响应代码为100，客户端再提交完整的表示。

响应报头：如果因为服务器方面临时遇到问题（比如资源不足），而不是因为客户端方面的问题而导致中断请求的话，服务器可以把Retry-After报头的值设为一个日期或一个间隔时间，以秒为单位，以便客户端可以过段时间重试。

414(&quot;Request-URI Too Long&quot;)
重要程度：低。
HTTP标准并没有对URI长度作出官方限制，但大部分现有的web服务器都对URI长度有一个上限，而web服务可能也一样。导致URI超长的最常见的原因是：表示数据明明是该放在实体主体里的，但客户端却把它放在了URI里。深度嵌套的数据结构也有可能引起URI过长。

415(&quot;Unsupported Media Type&quot;)
重要程度：中等。
当客户端在发送表示时采用了一种服务器无法理解的媒体类型，服务器发送此响应代码。比如说，服务器期望的是XML格式，而客户端发送的确实JSON格式。
如果客户端采用的媒体类型正确，但格式有问题，这时最好返回更通用的400。

416(&quot;Requestd Range Not Satisfiable&quot;)
重要程度：低。
当客户端所请求的字节范围超出表示的实际大小时，服务器发送此响应代码。例如：你请求一个表示的1-100字节，但该表示总共只用99字节大小。

请求报头：仅当原始请求里包含Range报头时，才有可能收到此响应代码。若原始请求提供的是If-Range报头，则不会收到此响应代码。
响应报头：服务器应当通过Content-Range报头告诉客户端表示的实际大小。

417(&quot;Expectation Failed&quot;)
重要程度：中等。
此响应代码跟100正好相反。当你用LBYL请求来考察服务器是否会接受你的表示时，如果服务器确认会接受你的表示，那么你将获得响应代码100，否则你将获得417。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5xx-服务端错误" tabindex="-1"><a class="header-anchor" href="#_5xx-服务端错误" aria-hidden="true">#</a> 5XX 服务端错误</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>这些响应代码表明服务器端出现错误。一般来说，这些代码意味着服务器处于不能执行客户端请求的状态，此时客户端应稍后重试。有时，服务器能够估计客户端应在多久之后重试。并把该信息放在Retry-After响应报头里。

5XX系列响应代码在数量上不如4XX系列多，这不是因为服务器错误的几率小，而是因为没有必要如此详细--对于服务器方面的问题，客户端是无能为力的。

500(&quot;Internal Server Error&quot;)
重要程度：高。
这是一个通用的服务器错误响应。对于大多数web框架，如果在执行请求处理代码时遇到了异常，它们就发送此响应代码。

501(&quot;Not Implemented&quot;)
重要程度：低。
客户端试图使用一个服务器不支持的HTTP特性。
最常见的例子是：客户端试图做一个采用了拓展HTTP方法的请求，而普通web服务器不支持此请求。它跟响应代码405比较相似，405表明客户端所用的方法是一个可识别的方法，但该资源不支持，而501表明服务器根本不能识别该方法。

502(&quot;Bad Gateway&quot;)
重要程度：低。
只有HTTP代理会发送这个响应代码。它表明代理方面出现问题，或者代理与上行服务器之间出现问题，而不是上行服务器本身有问题。若代理根本无法访问上行服务器，响应代码将是504。

503(&quot;Service Unavailable&quot;)
重要程度：中等到高。
此响应代码表明HTTP服务器正常，只是下层web服务服务不能正常工作。最可能的原因是资源不足：服务器突然收到太多请求，以至于无法全部处理。由于此问题多半由客户端反复发送请求造成，因此HTTP服务器可以选择拒绝接受客户端请求而不是接受它，并发送503响应代码。

响应报头：服务器可以通过Retry-After报头告知客户端何时可以重试。

504(&quot;Gateway Timeout&quot;)
重要程度：低。
跟502类似，只有HTTP代理会发送此响应代码。此响应代码表明代理无法连接上行服务器。

505(&quot;HTTP Version Not Supported&quot;)
重要程度： 非常低。
当服务器不支持客户端试图使用的HTTP版本时发送此响应代码。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),v=[s];function a(u,r){return i(),e("div",null,v)}const t=n(l,[["render",a],["__file","http002-常见http响应状态码.html.vue"]]);export{t as default};
