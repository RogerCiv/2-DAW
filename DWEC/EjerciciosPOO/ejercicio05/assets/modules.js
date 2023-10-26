const datos = [
  {
  "id": 1,
  "postId": 1,
  "userId": 1,
  "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit ipsum ac velit sollicitudin, id fringilla sapien dapibus. Nulla condimentum ullamcorper tellus vel tristique. Donec nec sagittis ante. Proin semper, nunc et bibendum eleifend, odio justo facilisis nunc, vel ullamcorper tortor sapien at eros. Etiam euismod felis vel elit lobortis laoreet. Maecenas ac lobortis diam. Proin vitae neque sit amet ante pretium consectetur. Nulla facilisi."
  },
  {
  "id": 2,
  "postId": 1,
  "userId": 1,
  "comment": "Nulla quis libero vel orci rutrum suscipit. Proin pretium ligula et dapibus interdum. Sed commodo, dui vel feugiat hendrerit, enim nibh commodo nisi, quis mollis nunc lectus ut nisi. Sed ut lectus ac nisi vulputate consequat nec ac nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vulputate magna vitae nibh tincidunt vestibulum. Duis suscipit nulla sit amet neque varius, ut efficitur lorem bibendum. Maecenas euismod euismod velit sit amet faucibus."
  },
  {
  "id": 3,
  "postId": 3,
  "userId": 2,
  "comment": "Cras ac elit sit amet mi placerat bibendum. Sed eleifend turpis vitae enim commodo, a lacinia ipsum ornare. Curabitur cursus pharetra ante, at malesuada erat. Suspendisse potenti. Aliquam erat volutpat. Praesent aliquet risus vitae arcu aliquet porttitor. Donec vestibulum malesuada libero quis feugiat. Integer efficitur ullamcorper sapien, at auctor mi tincidunt vel. Fusce sit amet turpis nec quam ullamcorper molestie. Vestibulum varius augue a semper malesuada. Donec sollicitudin, magna vitae semper euismod, arcu velit tristique massa, in pretium tellus odio eget nisl."
  },
  {
  "id": 4,
  "postId": 3,
  "userId": 2,
  "comment": "Vivamus commodo metus eget velit convallis, sit amet tincidunt tellus elementum. Fusce maximus venenatis ipsum, vel venenatis leo faucibus ac. Maecenas scelerisque nisi et sapien elementum, sed faucibus odio tempor. Proin pulvinar blandit eros a luctus. Praesent laoreet elit in elit rutrum, eget commodo ante gravida. Fusce eget ligula digniss"
  },
  {
  "id": 6,
  "postId": 3,
  "userId": 2,
  "comment": "Curabitur viverra tellus vitae augue laoreet, nec dapibus turpis molestie. Nam blandit mollis lacus, eget bibendum arcu feugiat vel. Morbi id blandit dolor. Sed sollicitudin, odio eget aliquam rhoncus, velit urna imperdiet nunc, sed tincidunt sapien odio vitae risus. Sed at aliquet nisi. Suspendisse volutpat interdum nunc vel mattis. Ut ac lectus tincidunt, iaculis ante at, sagittis nibh. Nunc ac arcu tortor. Donec vehicula risus non diam vehicula, non aliquam leo efficitur. Vivamus elementum, lacus vel vehicula rhoncus, magna orci volutpat est, vel cursus dolor ante vel orci."
  },
  {
  "id": 7,
  "postId": 3,
  "userId": 2,
  "comment": "Donec mattis turpis id suscipit dapibus. Nunc blandit elit quis enim posuere, vel dictum velit tempor. Aenean euismod auctor odio, ac eleifend velit commodo vitae. Aliquam vel fringilla orci. Duis euismod justo sit amet odio posuere lobortis. Nunc quis magna felis. Nullam consectetur arcu in nibh sollicitudin, eget pulvinar mi dapibus. Proin bibendum ex non augue lobortis viverra. Praesent aliquet enim eget quam interdum, ac fermentum dolor vehicula. Nulla volutpat, nulla vel pretium facilisis, augue felis eleifend eros, ac hendrerit mauris mauris quis quam."
  },
  {
  "id": 8,
  "postId": 3,
  "userId": 2,
  "comment": "Sed mollis sagittis fringilla. Donec in consequat quam, quis varius ante. Aliquam quis magna euismod, vestibulum velit eu, tempor lorem. Vivamus vel urna velit. Sed suscipit metus in malesuada facilisis. Fusce vulputate diam non orci congue posuere. Morbi vel imperdiet risus. Aliquam vulputate semper erat. Aenean vestibulum eleifend magna. Praesent at velit tristique, finibus nulla in, euismod orci. Nullam lobortis, felis vitae fermentum suscipit, mauris est vehicula mauris, vitae pretium ante justo in nisi. Suspendisse faucibus dui eget turpis aliquet varius. Aenean tristique elit eget mi tempor, sit amet congue dui suscipit. Sed eget tempor tortor. Quisque mattis urna lacus, nec efficitur nulla tincidunt sed. Nullam pretium libero sed ligula aliquet luctus. Ut ac odio finibus, faucibus massa nec, congue nisl."
  },
  {
  "id": 9,
  "postId": 3,
  "userId": 2,
  "comment": "Etiam luctus felis non quam ultrices vehicula. Nam vestibulum nisi justo, in auctor sapien sollicitudin quis. Ut consectetur tellus enim, ac facilisis sapien sollicitudin vel. Donec varius enim in commodo laoreet. Vivamus vel nulla vitae quam vulputate lacinia. Sed rutrum scelerisque elit eu pretium. Donec quis efficitur magna. Suspendisse et nisl a metus venenatis bibendum. Vestibulum tempor posuere lobortis. Fusce in ex at sem dictum consectetur eget sit amet tellus. Aenean lobortis enim ac urna ultrices euismod. Nullam in enim a tellus dictum tincidunt."
  },
  {
  "id": 10,
  "postId": 3,
  "userId": 2,
  "comment": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla efficitur neque sit amet risus congue vestibulum. Nulla nec tellus sapien. Curabitur tempor mauris ut orci egestas laoreet. Morbi in sapien nec quam interdum mollis. Sed non eleifend felis, sit amet sagittis risus. Aliquam eu lacus purus. Integer bibendum enim in nunc venenatis tincidunt. Sed eleifend, est a pellentesque consequat, justo ipsum tincidunt sapien, in varius sapien enim non neque. Duis facilisis velit non velit mollis blandit. Maecenas ornare enim velit, in semper augue sollicitudin id. Nunc eu vestibulum arcu. Ut et risus elit. Sed sit amet augue nec libero elementum efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut malesuada imperdiet eros, a aliquet ante placerat ut. Duis efficitur lobortis lacus, ut tempor mi vestibulum vitae. Sed ultricies posuere purus, id scelerisque metus bibendum sit amet. Nullam efficitur vel odio a laoreet."
  },
  {
  "id": 11,
  "postId": 3,
  "userId": 2,
  "comment": "Cras convallis ipsum eget sapien hendrerit dignissim. Vivamus euismod orci eu lorem pharetra dignissim. Nulla ut felis non tortor auctor ullamcorper. Proin ac purus vitae turpis pulvinar vulputate. Ut vel placerat quam. Sed varius, nisi quis iaculis imperdiet, nulla lorem dictum turpis, in bibendum diam quam ac velit. Proin mollis nibh eget eros imperdiet, eget gravida felis bibendum. Etiam vehicula, ipsum nec eleifend tincidunt, arcu odio luctus mauris, vel efficitur odio"
  },
  {
  "id": 12,
  "postId": 3,
  "userId": 2,
  "comment": "Pellentesque tristique lacus id velit convallis, sit amet semper nisl lobortis. Nam consectetur lacinia leo, eu suscipit quam placerat ac. Donec convallis massa vel felis faucibus consectetur. Proin lacinia, felis eu pellentesque dictum, odio risus rhoncus arcu, ac vulputate risus lectus eu elit. Fusce euismod, tortor vel iaculis efficitur, est ex gravida dolor, ut pulvinar metus nulla id enim. Fusce nec mi non tortor hendrerit facilisis. Vivamus rutrum diam ut mi tincidunt bibendum. Sed vel tellus at lacus molestie vulputate eget et nulla. Nulla facilisi. Integer tristique suscipit mauris, in vehicula mi vehicula ac. Proin facilisis, nibh nec maximus euismod, justo nisi hendrerit urna, sed scelerisque mi libero at ipsum. Duis et sapien non arcu venenatis eleifend quis id est. Nunc efficitur sit amet nulla ut pretium. Praesent maximus justo ipsum, sed euismod nibh consequat a. Aliquam tristique metus ac ultrices luctus. Nam id efficitur purus."
  },
  {
  "id": 13,
  "postId": 3,
  "userId": 2,
  "comment": "Phasellus rhoncus purus eget turpis varius malesuada. Suspendisse sem lorem, vestibulum ac libero eu, blandit bibendum orci. Donec fermentum justo a mi tempor iaculis. Nulla facilisi. Integer rhoncus, lorem quis pulvinar elementum, ante ante bibendum lectus, sed dapibus orci felis non velit. Duis id molestie augue, non aliquet turpis. Morbi nec nibh sit amet sem ullamcorper ornare. Ut et libero nec elit tincidunt bibendum ac vel nunc. Donec eu tellus malesuada, bibendum massa eu, vehicula ipsum. Suspendisse commodo, lectus vel malesuada pellentesque, nibh arcu gravida eros, in vulputate lacus est sit amet enim. Etiam commodo eros ut bibendum auctor. In consequat erat vel imperdiet faucibus. Sed maximus hendrerit erat, ac dignissim turpis vestibulum vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut euismod, tortor eget ultricies pulvinar, orci ante malesuada magna, in auctor mi arcu ut tellus. Vivamus sed dui vel tellus dignissim elementum. Quisque vitae mauris in nunc auctor malesuada. Phasellus blandit, eros non accumsan congue, lectus nisl sodales ante, eget rhoncus justo nisl ac enim."
  },
  {
  "id": 14,
  "postId": 3,
  "userId": 2,
  "comment": "Vivamus et libero auctor, consequat risus eget, vestibulum nulla. In ullamcorper, velit vitae laoreet fringilla, metus dui tempor dolor, id iaculis eros magna vel nulla. Morbi mollis pellentesque convallis. Duis bibendum dolor vel est aliquet, a accumsan elit convallis. Curabitur non nisi ex. In vulputate interdum metus, sed rhoncus est faucibus in. Donec aliquet tincidunt eros eu ullamcorper. Fusce nec ante gravida, aliquet arcu vel, pellentesque magna. Aliquam erat volutpat. Aenean a imperdiet lorem. Vivamus consequat auctor libero, vitae rhoncus erat posuere sed. Sed semper dui quis ipsum vulputate venenatis. Etiam a orci varius, laoreet massa vel, tincidunt eros. Ut sit amet velit at nibh finibus blandit eu ut nibh. Nullam laoreet aliquet ultricies."
  },
  {
  "id": 15,
  "postId": 3,
  "userId": 2,
  "comment": "Suspendisse ac nibh interdum, pharetra quam ac, sollicitudin risus. Sed ultricies vel ex nec auctor. Nulla quis erat vel libero suscipit vestibulum. Sed hendrerit, magna id iaculis dignissim, velit urna viverra lectus, eget posuere sapien orci vel urna. Proin malesuada urna massa, eu convallis velit vestibulum eu. Pellentesque ac elit eget elit pulvinar convallis a eget erat. Sed vitae hendrerit justo. Integer tincidunt commodo leo, quis ullamcorper odio molestie sed. Proin eget commodo enim, sit amet consequat est. Maecenas rutrum vestibulum commodo. Donec facilisis finibus turpis, vel varius magna commodo vel. Suspendisse interdum id sem in commodo. Duis eu dui et metus varius ornare. Fusce efficitur turpis libero, vel pulvinar nibh interdum in. Nullam tristique metus vel lectus pharetra, sit amet iaculis sem volutpat. Vivamus eget efficitur nunc, vel dapibus sapien. Aliquam sed semper nisi, a consequat eros. Suspendisse at dignissim nibh, eu lacinia turpis."
  },
  {
  "id": 16,
  "postId": 3,
  "userId": 2,
  "comment": "Fusce malesuada, ante ac lobortis tincidunt, sem nibh varius purus, in ultricies ipsum nunc ut lectus. Etiam vel quam rhoncus, malesuada lacus sed, interdum enim. Aliquam fringilla imperdiet nunc id posuere. Nunc hendrerit, mi ac sollicitudin aliquet, lacus velit bibendum augue, ut pulvinar augue lectus ut nisi. Duis tempus posuere lectus"
  },
  {
  "id": 17,
  "postId": 3,
  "userId": 2,
  "comment": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam vitae justo ut turpis venenatis consectetur. Nulla blandit ut ex a lobortis. Vestibulum id lectus in mi faucibus fermentum non at nisi. Etiam non arcu non velit accumsan faucibus eget et ex. Praesent id ligula felis. Ut eget dolor eu est varius pharetra. In et aliquam velit. Duis sit amet maximus nunc. Duis ac magna quis mauris cursus euismod vitae eget magna. Nam quis sapien eu velit tincidunt bibendum."
  },
  {
  "id": 18,
  "postId": 3,
  "userId": 2,
  "comment": "Donec faucibus pellentesque urna, a laoreet orci dignissim sit amet. Praesent sed nibh ut sem porttitor pharetra. Duis auctor quam quis augue bibendum, vel elementum metus convallis. Nullam mollis, ipsum eu vestibulum rutrum, odio turpis eleifend risus, vel laoreet eros lectus in nunc. Maecenas vehicula, nibh non vestibulum accumsan, nunc erat tempor augue, ut semper enim est at dui. Maecenas nec augue sed sapien gravida hendrerit vel ut odio. Integer tincidunt felis vitae purus commodo, quis molestie quam molestie. Duis sit amet bibendum lorem. Integer ornare elit eget enim egestas, at placerat nunc bibendum. Aenean id purus id leo suscipit consectetur. Curabitur nec turpis in justo consectetur feugiat sed at est. Fusce ut malesuada neque, a sollicitudin quam. Donec feugiat libero sed molestie maximus. Fusce et ex nulla. Aenean sagittis vel justo id tincidunt. Praesent et elementum velit, id bibendum tellus. Nunc facilisis massa et fringilla fringilla. Donec convallis ac lectus non auctor. Vivamus blandit urna sapien, at egestas est sagittis in."
  },
  {
  "id": 19,
  "postId": 3,
  "userId": 2,
  "comment": "Maecenas blandit, nunc id ultricies cursus, sapien magna facilisis urna, non vehicula leo quam eu sapien. Morbi sodales, lectus eu sollicitudin tempor, est leo faucibus ex, sed sagittis tellus odio vitae urna. Sed et dapibus metus. Fusce eleifend semper ante, quis feugiat quam. Duis eget maximus lectus, sit amet ultrices odio. Vestibulum consectetur est nisl, vitae commodo odio sagittis quis."
  },
  {
  "id": 20,
  "postId": 3,
  "userId": 2,
  "comment": "Pellentesque fermentum, odio quis vestibulum laoreet, erat erat varius ipsum, vel suscipit tellus dolor sit amet nisi. Ut tempor turpis at justo iaculis, et pretium risus euismod. Curabitur malesuada lectus eu massa bibendum, at ultricies eros luctus. Nunc vel tellus in lorem eleifend vestibulum. Donec pretium congue sem, id venenatis dolor ullamcorper at. Fusce convallis urna vel lorem scelerisque tristique. Pellentesque convallis, sapien a volutpat pretium, nibh nibh convallis eros, quis aliquam leo neque a nulla. Suspendisse potenti. Etiam at ligula velit. Sed a urna quis velit pharetra aliquet quis vitae turpis. Ut rutrum feugiat augue, nec blandit enim maximus id. Duis vitae tellus a ipsum imperdiet tristique non non elit. Duis bibendum nunc vel nulla elementum luctus. Vivamus euismod justo vel libero imperdiet, eu pretium sapien vestibulum. Aenean in dapibus purus, vitae hendrerit lectus."
  },
  {
  "id": 21,
  "postId": 3,
  "userId": 2,
  "comment": "Sed mollis sagittis fringilla. Donec in consequat quam, quis varius ante. Aliquam quis magna euismod, vestibulum velit eu, tempor lorem. Vivamus vel urna velit. Sed suscipit metus in malesuada facilisis. Fusce vulputate diam non orci congue posuere. Morbi vel imperdiet risus. Aliquam vulputate semper erat. Aenean vestibulum eleifend magna. Praesent at velit tristique, finibus nulla in, euismod orci. Nullam lobortis, felis vitae fermentum suscipit, mauris est vehicula mauris, vitae pretium ante justo in nisi. Suspendisse faucibus dui eget turpis aliquet varius. Aenean tristique elit eget mi tempor, sit amet congue dui suscipit. Sed eget tempor tortor. Quisque mattis urna lacus, nec efficitur nulla tincidunt sed. Nullam pretium libero sed ligula aliquet luctus. Ut ac odio finibus, faucibus massa nec, congue nisl."
  }
  ]



export function UsuarioFuncional(id,firstname,username) {
  this._id = id;
  this._firstname = firstname;
  this._username = username;

  Object.defineProperty(this,"id",{
    get: function(){
      return this._id;
    },
    set: function(newId){
      this._id = newId;
    }
  })
  
  
  UsuarioFuncional.prototype.obtenerComentarios = function() {
    const comentariosUsuario = datos.filter((dato) => dato.userId === this.id);
    const comentarios = comentariosUsuario.map((comentario) => comentario.comment);
    return comentarios;
  };
  

}
