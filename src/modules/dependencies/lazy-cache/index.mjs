let lazyCacheArray = [
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-emu-full_es3.a",89856,"67e272a1c11015f9a41f297dec1e7acd", ""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-emu-ofb-full_es3.a",89856,"67e272a1c11015f9a41f297dec1e7acd", ""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-emu-ofb.a",58514,"78672ab9ca77e30e7612a8b69d1e646a", ""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-emu-webgl2-full_es3.a",90234,"7ddf7d97a171acd2d646df324f9f8716",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-emu-webgl2-ofb-full_es3.a",90234,"7ddf7d97a171acd2d646df324f9f8716",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-emu-webgl2-ofb.a",89480,"4c7e5182422c985a6b626ff97c3c281b",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-emu-webgl2.a",89480,"4c7e5182422c985a6b626ff97c3c281b",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-emu.a",58514,"78672ab9ca77e30e7612a8b69d1e646a",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-full_es3.a",70440,"87740152a7780245a1c76150fe5c3af3",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-mt-emu-full_es3.a",90144,"4959f3129bf7d372b8b5648c8984fc4f",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-mt-emu-ofb-full_es3.a",266074,"f1eb83cef5d96847b1aaf5e2b2634ad2",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-mt-emu-ofb.a",166554,"9d56f70bd1bacf65aefd66fd64e90f9b",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-mt-emu-webgl2-full_es3.a",90522,"2ee6618e092e9b93c45d2655463d6086",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-mt-emu-webgl2-ofb-full_es3.a",266452,"1f6e691a9d3c168554dc5830a671a495",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-mt-emu-webgl2-ofb.a",263214,"833075262bfd39a04036ce075b0e82a7",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-mt-emu-webgl2.a",89768,"7a3646f594b3e19ae7ae7ef2a122c92d",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-mt-emu.a",58730,"cae1b46806c231362f6b6136a2dc9ff8",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-mt-full_es3.a",70728,"d0c7f6fa9f5f25916aa9456d18da6c69",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-mt-ofb-full_es3.a",246658,"851a239e4b49e1bc96b29a49f6343152",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-mt-ofb.a",147138,"2a57eccfdb5683a5bf37662d5ee216cf",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-mt-webgl2-full_es3.a",71098,"d341521caf96daba22b0e8fb6e3c65f7",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-mt-webgl2-ofb-full_es3.a",247028,"16ebbccec1c1bb5b7516c5773ac78597",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-mt-webgl2-ofb.a",243790,"0147b3c3e1105bf812c94a073dc43f24",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-mt-webgl2.a",70344,"b8ed641358b8ae2e53fe822f1913f4a6",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-mt.a",39314,"91b468acb638eaa87926057c7982b859",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-ofb-full_es3.a",70440,"87740152a7780245a1c76150fe5c3af3",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-ofb.a",39098,"b8c76d5f85c8bbef9dd7966810c24bcb",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-webgl2-full_es3.a",70810,"75372d2b218590a585c4ce0793690699",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-webgl2-ofb-full_es3.a",70810,"75372d2b218590a585c4ce0793690699",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-webgl2-ofb.a",70056,"7bfacbb039c26b44224fed4b7660f8f0",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-webgl2.a",70056,"7bfacbb039c26b44224fed4b7660f8f0",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-ww-emu-full_es3.a",90038,"ec12e6563a4132e9a0c9fac67bb920c6",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-ww-emu-ofb-full_es3.a",90038,"ec12e6563a4132e9a0c9fac67bb920c6",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-ww-emu-ofb.a",58650,"b41248d84238533be0cb2f8babe8ff49",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-ww-emu-webgl2-full_es3.a",90416,"f9e4ea177f3afcc3c4efc7cab3fedbe4",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-ww-emu-webgl2-ofb-full_es3.a",90416,"f9e4ea177f3afcc3c4efc7cab3fedbe4",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-ww-emu-webgl2-ofb.a",89660,"b31473635ae63975ed76fa14e39f507c",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-ww-emu-webgl2.a",89660,"b31473635ae63975ed76fa14e39f507c",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-ww-emu.a",58650,"b41248d84238533be0cb2f8babe8ff49",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-ww-full_es3.a",70620,"c5c66b802a0680775650fd1485b6d1ca",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-ww-ofb-full_es3.a",70620,"c5c66b802a0680775650fd1485b6d1ca",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-ww-ofb.a",39232,"2dfa77c642581693b4df09fc1ef09faf",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-ww-webgl2-full_es3.a",70990,"7bad320aca57700d16e8c53dc987add2",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-ww-webgl2-ofb-full_es3.a",70990,"7bad320aca57700d16e8c53dc987add2",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-ww-webgl2-ofb.a",70234,"95c9bf05cc59bdec5d591a946ed2dbb3",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-ww-webgl2.a",70234,"95c9bf05cc59bdec5d591a946ed2dbb3",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL-ww.a",39232,"2dfa77c642581693b4df09fc1ef09faf",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libGL.a",39098,"b8c76d5f85c8bbef9dd7966810c24bcb",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libal.a",18656,"7e4fc0e6a6e871ff6ef69158127f7535",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libasan_js.a",7898,"4c5036ca39e24b15d7618eac8907b198",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libasan_rt-mt.a",1674326,"5306c80d0657c56435f628fba93623a8",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libasan_rt-ww.a",1673730,"5b3a63370bd34b358e71051cdded3a96",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libasan_rt.a",1677340,"d826f4d2fef306fe888fb7aa63b9e1f3",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++-except.a",6437758,"f550c2d7e4ef2a975f9f47ab05bb06df",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++-mt-except.a",6442030,"c18f8e0d725bd1ee41b1b41f022f1816",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++-mt-noexcept.a",6211864,"deb516921775a9169b282ff83db9145d",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++-mt.a",6583348,"d2350672afcd7be92f81adc614f14582",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++-noexcept.a",6209488,"0a46b0190999baab70e9d5a5a6000da2",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++-ww-except.a",6441072,"d59d4b42a84da2e4bb8e520bf50ae5dd",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++-ww-noexcept.a",6210918,"ef0e27928f857475dae386cbe7adfa48",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++-ww.a",6582366,"9feb1ed5c92fabd93f448dc154babb8a",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++.a",6641068,"7f0f63af51d880cdd2996983d627357c",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++abi-debug-except.a",1324238,"3b0272fae1c70748ab0dd1448c7860af",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++abi-debug-mt-except.a",1344780,"453c30f086c10b17aa65d4367a6be84a",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++abi-debug-mt-noexcept.a",1255620,"81effd1cf4c86b7d10398f1e4b45e437",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++abi-debug-mt.a",1262194,"d20e952acdea910c75a04cb97dc785e4",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++abi-debug-noexcept.a",1239542,"8c3865e2c44d709f1443462018e8383b",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++abi-debug-ww-except.a",1344346,"4a124d06b94a6331bf8896d28de65375",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++abi-debug-ww-noexcept.a",1255220,"54ff55d98b26f130c31359c7e6270040",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++abi-debug-ww.a",1261822,"1cd6df80325b9daaea2f9d32dc1f713d",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++abi-debug.a",1246268,"9ed3c10f8d95aa6e7f1ade7bfe14178d",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++abi-except.a",1000732,"1ff318d7409dabb95f950a541315edcd",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++abi-mt-except.a",1021280,"2513fcc59d6cc5e468daf29b6b10338e",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++abi-mt-noexcept.a",934376,"7f665d094d5a65d50dab1a15dcaaac3e",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++abi-mt.a",939898,"070359500dc960418d7d8f34dc420eee",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++abi-noexcept.a",918294,"1ddbd451cc4db7159c8bf8a11b423840",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++abi-ww-except.a",1020828,"040bfad62672f56230948b0eeab2d6e2",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++abi-ww-noexcept.a",933960,"f53afcf9ac54f12afaeeee0197972eaf",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++abi-ww.a",939508,"9dfe4b79ed0b53be3f26cba517a2dd56",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc++abi.a",923732,"a068c2e2ac626de87f03488352a3237c",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc-asan-debug.a",4158968,"5599624329030e042138b1193025b0ed",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc-asan.a",4151650,"39970629e6f0275439f90a25a291a8ca",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc-debug.a",3128288,"046210061d6b6e0bcd6139b27ebba4c2",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc-mt-asan-debug.a",4687278,"a21c558651c2f2f0aa5d78cf4e76fa56",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc-mt-asan.a",4661804,"d46eabec99a99a7226b5182d548897a4",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc-mt-debug.a",3537434,"c568ebd1d6459575931e6def98c4aa57",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc-mt.a",3523698,"8b830e3b53a183b19e1f36a01f7ecb68",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc-ww-asan-debug.a",4202764,"a1391c7292b2f4f7b8a7e79d6d819cb5",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc-ww-asan.a",4195460,"9d0578d2feff938e5f6e9fd742465ad5",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc-ww-debug.a",3171358,"4a8dc5e04f1145739232f5b017668e89",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc-ww.a",3166834,"4cb884f311841123686dfb93dda20d6a",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc.a",3123758,"b25179671552cce3604a0f7b0c8a8963",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc_optz-asan-debug.a",26570,"7001efb36f7fdacfb52f95bb44cca129",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc_optz-asan.a",26570,"7001efb36f7fdacfb52f95bb44cca129",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc_optz-debug.a",24338,"c03f4ec05c1944aa9bd66f298c93a234",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc_optz-mt-asan-debug.a",27074,"2e678fa051d9f7468561ca572f060d4f",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc_optz-mt-asan.a",27074,"2e678fa051d9f7468561ca572f060d4f",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc_optz-mt-debug.a",24842,"50d129b29e1f302ace4f665b0434c6ce",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc_optz-mt.a",24842,"50d129b29e1f302ace4f665b0434c6ce",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc_optz-ww-asan-debug.a",26884,"10cc8ee166e38e9a30821cc0a4996fb1",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc_optz-ww-asan.a",26884,"10cc8ee166e38e9a30821cc0a4996fb1",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc_optz-ww-debug.a",24656,"39f6864c363b8d4201ab2a363fd58a3e",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc_optz-ww.a",24656,"39f6864c363b8d4201ab2a363fd58a3e",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libc_optz.a",24338,"c03f4ec05c1944aa9bd66f298c93a234",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libcompiler_rt-mt.a",539682,"a9a75cf2ecc424255a665b2b23849a3a",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libcompiler_rt-wasm-sjlj-mt.a",543354,"6543be5ce2334bcbf5f21002732a7ad9",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libcompiler_rt-wasm-sjlj-ww.a",538724,"18b911523a3514e00b9a997978140930",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libcompiler_rt-wasm-sjlj.a",538266,"2672ffe6faed07e5c751173b6f5571fe",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libcompiler_rt-ww.a",535052,"30f2166d0dbdeee01a246156333fedbc",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libcompiler_rt.a",530834,"be9f2672774270314485e6028dd8f64a",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libdlmalloc-debug-noerrno-tracing.a",84782,"b1b00d4a8b79d75824522f3049daf9ac",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libdlmalloc-debug-noerrno.a",84026,"88257e4d61e7dfd747c8ae3b1f7f469a",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libdlmalloc-debug-tracing.a",85456,"ee7bccd4528b2ca20d9ab30f63ed175c",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libdlmalloc-debug.a",84590,"0bd1ce855314ca5ad860dfc70c27ead2",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libdlmalloc-mt-debug-noerrno-tracing.a",84858,"3b12389fcae76b98e9ee664fdb5b01c8",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libdlmalloc-mt-debug-noerrno.a",84144,"bc5228af558b84e67d7096a067ce3b22",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libdlmalloc-mt-debug-tracing.a",85330,"ba39fc5895efb65c3822db88c47115d9",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libdlmalloc-mt-debug.a",84576,"1981b585b84ddf1c37c8aa6396397374",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libdlmalloc-mt-noerrno-tracing.a",81602,"52752761edf9197eb4555c3c66b1cfc7",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libdlmalloc-mt-noerrno.a",80888,"c57fbf3695ad8bd31662d565201c19c4",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libdlmalloc-mt-tracing.a",82032,"e12cb4403d1c10841267f22cfb5b1f1b",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libdlmalloc-mt.a",81278,"545e98f635cff8e7002285b817b61506",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libdlmalloc-noerrno-tracing.a",81438,"7ba0c7cffc40ab5ebeeee874a4b876c5",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libdlmalloc-noerrno.a",80682,"bbf296bdcc528ce683b34d4c05aa93e1",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libdlmalloc-tracing.a",82070,"bb4717a108d4edaa7cb9f5be0b7665ef",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libdlmalloc-ww-debug-noerrno-tracing.a",84872,"1e68b3e9635fbbe0c543b7102f20cbc8",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libdlmalloc-ww-debug-noerrno.a",84116,"ada197b345ee1027cd196dee44e5cd6a",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libdlmalloc-ww-debug-tracing.a",85546,"34dc3a9a0e14e1d90e09781662ce4f8c",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libdlmalloc-ww-debug.a",84678,"6d8a521077ee58bf016eaadcb5382241",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libdlmalloc-ww-noerrno-tracing.a",81526,"f025ac5a2ab661c0e88d5f77eee078b2",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libdlmalloc-ww-noerrno.a",80770,"38c9debbddbc60a9517a1dfbfc543ebc",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libdlmalloc-ww-tracing.a",82162,"5405ebc6484cbd5f34d26849669c2b96",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libdlmalloc-ww.a",81292,"35526b09e03adf6680098cc667c911de",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libdlmalloc.a",81204,"e9baf86a3644c2e97580741d4086238a",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libembind-rtti.a",60404,"2b0083efb63467f4500da0fb7ccced51",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libembind.a",69976,"28dcc1410a7f959a3e4d2ba2435c2a32",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-debug-noerrno-tracing.a",69520,"7996331874a7dba13059e97a81c89285",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-debug-noerrno.a",68188,"095eb3c22cc70ccedb382bccbb3d5286",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-debug-tracing.a",69726,"26be4a1c38f52c834a8cd0e69f38af6f",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-debug.a",68324,"bf7c88407e1961a8f41ed2fc8dc4d944",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-memvalidate-mt-noerrno-tracing.a",70436,"5a45db3dab38d5f2f9bb3f5fd5ef4bf7",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-memvalidate-mt-noerrno.a",69512,"75f75f9c496cb32ba7a5fdeef17f11df",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-memvalidate-mt-tracing.a",70492,"a156dc97239ffb3bcf34355d302ec23b",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-memvalidate-mt.a",69568,"aed7c32cd96a1013d2f1066f4ca0f7de",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-memvalidate-noerrno-tracing.a",70070,"d5e8c205953dc737bbef0ffce6b25588",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-memvalidate-noerrno.a",68820,"b9549002504d3dd0f7d18e0066d246f9",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-memvalidate-tracing.a",70276,"b7187ed2e622a157137e5d367b956b4d",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-memvalidate-verbose-mt-noerrno-tracing.a",78716,"569a4e9dc8225b0727310f4136fbe47d",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-memvalidate-verbose-mt-noerrno.a",77744,"a9e688346e5e8936352a504c86ec0a5c",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-memvalidate-verbose-mt-tracing.a",78772,"1bd2b4c69ceda8b546e390780c8a0656",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-memvalidate-verbose-mt.a",77800,"c2bd218abb71572833ba951ec874a144",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-memvalidate-verbose-noerrno-tracing.a",75694,"57394b86bc65119d986ce45640132663",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-memvalidate-verbose-noerrno.a",74712,"9159d987f47af6edac5e38959f077327",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-memvalidate-verbose-tracing.a",75900,"435c3df5ecbefeed6038296d92df4bdd",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-memvalidate-verbose-ww-noerrno-tracing.a",75784,"839999601a2aadd297fc7de8a039a39b",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-memvalidate-verbose-ww-noerrno.a",74800,"0190b60668dbf40987f56c31446c56ca",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-memvalidate-verbose-ww-tracing.a",75992,"ffe2af0ed0f11e70c5f66cf267ad368d",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-memvalidate-verbose-ww.a",74936,"8a2b9fe11dc72e3193582604cef88da9",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-memvalidate-verbose.a",74848,"30ffc3081a0463c363e6eb42a8de682d",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-memvalidate-ww-noerrno-tracing.a",70158,"1be44146e22c0806bbb284698b69f36d",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-memvalidate-ww-noerrno.a",68910,"700be6099162dfe2ddc08e0a44314f82",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-memvalidate-ww-tracing.a",70366,"afc422ed57cc3b730d9ecb2b66b1706f",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-memvalidate-ww.a",69046,"4d0836d7c5cf75dad1339529913b47fa",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-memvalidate.a",68956,"f609e025acaa4317ab96973dddfc399b",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-mt-debug-noerrno-tracing.a",69856,"83c489507a31359bf5be9d5499310c31",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-mt-debug-noerrno.a",68726,"b323a0f02c7509859c0130fd2c879dec",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-mt-debug-tracing.a",69912,"eb784e46572b0d7b72b6ff3cf4f81063",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-mt-debug.a",68782,"c564c1f35d531db25dd18bc12bf15f8d",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-mt-noerrno-tracing.a",51650,"01ea541f4add070efb41d09e61f86a12",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-mt-noerrno.a",51682,"9631e59c79ad661fd8955ff4d1f6dc43",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-mt-tracing.a",51706,"6f32b51ddde84c5071b52600a1e42edf",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-mt.a",51738,"76783a36920e1f4964395af7a51ccd41",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-noerrno-tracing.a",51420,"1e183d1e2acc0c71d5d8539ca290e00b",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-noerrno.a",51404,"940f9efbefd3028fc00b3e20c0f465d2",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-tracing.a",51626,"3ff65aff8260a874068d3430219c2579",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-verbose-mt-noerrno-tracing.a",78204,"08f851b12237ab485f337b8cc856a5f8",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-verbose-mt-noerrno.a",77226,"3d302da309468b62f8122a11e0a164d9",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-verbose-mt-tracing.a",78260,"2d28b9fe89966ccb688b7d2908429241",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-verbose-mt.a",77282,"455952a3ad3e3ada1051b44b5b61c31e",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-verbose-noerrno-tracing.a",75460,"c6defee1d5b78225f7b31e980a739c70",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-verbose-noerrno.a",74494,"7b1c5686dc66388ce91e60159a84619a",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-verbose-tracing.a",75666,"82f0ee2037147e227f14b21543a7c7ae",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-verbose-ww-noerrno-tracing.a",75548,"5bb2e5e04b90f2c74df39098690f1475",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-verbose-ww-noerrno.a",74582,"68f1b4d321c88887664c014c6f4f4937",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-verbose-ww-tracing.a",75756,"45974be0c67858f48b496602943c546c",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-verbose-ww.a",74718,"367b07bac0b742f7a40d2d28dcbef8c0",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-verbose.a",74630,"c297d79bd3e04e231d67eff5edde10b8",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-ww-debug-noerrno-tracing.a",69608,"bdc320b2039bf20f916329a172ea40d3",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-ww-debug-noerrno.a",68278,"b81aad4d103937fe6c39b5ed513b234b",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-ww-debug-tracing.a",69816,"52bfa284b2ba97e421a73cc4d2ba8d35",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-ww-debug.a",68414,"f6f3ce4b22122efa2385eb6a030ac2f1",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-ww-noerrno-tracing.a",51510,"8da1d1c70dde8388ffd80ff80adaeb89",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-ww-noerrno.a",51492,"d9e3c49e4cf4333dbfb86aa9bcccc59d",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-ww-tracing.a",51718,"a07b1218c0f4e8e1b38f7afbef74f3dc",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc-ww.a",51628,"43d83cb9fbc09826b0cd2b75a3851f15",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libemmalloc.a",51540,"6fdb9710e9582e912f86efedb4ebbfba",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libfetch-mt.a",13526,"7cd7c30a08a5111025a370a4ed1dc4df",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libfetch-ww.a",12296,"e859276f8b3552e62a1d94c1e698d994",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libfetch.a",12330,"7910e8d5c9e8e91ba6e4c6b4a2df5739",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libhtml5.a",39268,"b3ca4cfb757229cd138a4c749a0ebd16",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libjsmath.a",13202,"120860d61964585b512f554dedad20af",""],
    ["./cache/sysroot/lib/wasm32-emscripten/liblsan_common_rt-mt.a",221900,"60b6367cef668aa703f739fe3dfccc38",""],
    ["./cache/sysroot/lib/wasm32-emscripten/liblsan_common_rt-ww.a",222514,"84fcf58f61752f74496567dfa2134af4",""],
    ["./cache/sysroot/lib/wasm32-emscripten/liblsan_common_rt.a",224430,"3479d9a970504320f649a364cea55413",""],
    ["./cache/sysroot/lib/wasm32-emscripten/liblsan_rt-mt.a",505914,"0d0daf749e2fc40cb36063339ea08e42",""],
    ["./cache/sysroot/lib/wasm32-emscripten/liblsan_rt-ww.a",505610,"14c299d8536eebb9ae4086a112ac5fde",""],
    ["./cache/sysroot/lib/wasm32-emscripten/liblsan_rt.a",505270,"ff0602c38b533d903d1a0c3fb5f380f5",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libnoexit.a",1608,"c41915f1beb948a61c19c8a58ec250e2",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libprintf_long_double-asan-debug.a",49764,"d969bfe5cf44c3edfd761950caa36437",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libprintf_long_double-asan.a",49764,"d969bfe5cf44c3edfd761950caa36437",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libprintf_long_double-debug.a",32894,"e9fa21952c5529d2ad0f7b4006ccca13",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libprintf_long_double-mt-asan-debug.a",49836,"60f555021da364d7e7dca653e82291f1",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libprintf_long_double-mt-asan.a",49836,"60f555021da364d7e7dca653e82291f1",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libprintf_long_double-mt-debug.a",32958,"07d77e41e4f931d708b32a18e853cd56",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libprintf_long_double-mt.a",32958,"07d77e41e4f931d708b32a18e853cd56",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libprintf_long_double-ww-asan-debug.a",49810,"f93c52fb9877669a8e258a20ca454fb1",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libprintf_long_double-ww-asan.a",49810,"f93c52fb9877669a8e258a20ca454fb1",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libprintf_long_double-ww-debug.a",32930,"8cca425aaebaf40bef8ef816426faf1f",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libprintf_long_double-ww.a",32930,"8cca425aaebaf40bef8ef816426faf1f",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libprintf_long_double.a",32894,"e9fa21952c5529d2ad0f7b4006ccca13",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libsanitizer_common_rt-mt.a",10569876,"21c0514e97a96642aa6cc3089879d57e",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libsanitizer_common_rt-ww.a",10567756,"247e02e3dbd5079b3642e16fe954f770",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libsanitizer_common_rt.a",10566920,"ad204ac79ccce1b5946f83610572f9d9",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libsockets-mt.a",40254,"3358e5158e8d821025755594b93f2d89",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libsockets-ww.a",39682,"328524d542e9c95ca91b2f9e80d39bd6",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libsockets.a",38742,"f4c8b798eb5d4b3059b18ce56653c0c7",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libsockets_proxy-mt.a",33814,"9174cfc72df616f1035d37ed3d99e2fd",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libsockets_proxy-ww.a",33788,"d9d763381cec20dd1b09894c0b411707",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libsockets_proxy.a",33960,"3cb14b3bcba85da1d510054bb76554e7",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libstandalonewasm-memgrow.a",83924,"7a4e5b76944bec6ea29de31f12c7c9aa",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libstandalonewasm.a",83412,"1bd28a12e65214c54cd048f4ab3e1f33",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libstb_image.a",377906,"f67b6bf92448fb41678a673898d43827",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libstubs-debug.a",28932,"f0ee398a06d1c95ed6b28bad40d1f9c3",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libstubs.a",24778,"80c0c8f4bcee3790fe402a4a377b3780",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libubsan_minimal_rt-mt.a",30756,"2af547af0b36122e923026df5990ac8c",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libubsan_minimal_rt-ww.a",30730,"c626964ae0ed858c60199c1ce466c380",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libubsan_minimal_rt.a",30748,"319f805692d27d52eaaf0e2c87e3927d",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libubsan_rt-mt.a",608350,"88641c340df99b52569fff8658c181b7",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libubsan_rt-ww.a",607916,"1eca04d59dcf430d439c0da9645fcf28",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libubsan_rt.a",607436,"02f3b8b7b53ee7014a789d6af98430f6",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libunwind-except.a",5074,"b7b48b2660e45ec12f760bdb00522a80",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libunwind-mt-except.a",5136,"b5328bf2c5a1cdd2a0c4be97a9e8fa0a",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libunwind-mt-noexcept.a",400,"f38cb19b37e0a8a4c0b3d2a39faf895d",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libunwind-mt.a",400,"f38cb19b37e0a8a4c0b3d2a39faf895d",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libunwind-noexcept.a",328,"c891e99baa172974f4f08e416747dbbc",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libunwind-ww-except.a",5110,"bf991c5aa94208a860f10e6d2f42d76e",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libunwind-ww-noexcept.a",374,"c74d21de3e07251fab6c4a0446dcbdba",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libunwind-ww.a",374,"c74d21de3e07251fab6c4a0446dcbdba",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libunwind.a",328,"c891e99baa172974f4f08e416747dbbc",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasm_workers-debug.a",16918,"84121b5082a9dbb7238b9d68f8bc393c",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasm_workers.a",13122,"aacd1ceb8ea30459277ab274fdd39bf2",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasm_workers_stub-debug.a",7074,"918e5d57d717571f124f008b44585275",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasm_workers_stub.a",6108,"5b640cabf0e08942b7b85876609f20f4",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasmfs-asan-debug-icase.a",7792522,"054c5bb139894517746ce23664912844",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasmfs-asan-debug.a",7749204,"703271cd1dbba742b6a9683d1a88701d",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasmfs-asan-icase.a",7687442,"557ade70ce9c88fdb660f80f70e91a05",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasmfs-asan.a",7641484,"4ef554032090a44ffbfa1ac806904990",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasmfs-debug-icase.a",6274122,"a662b95450ff037d79bdd3496971ab59",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasmfs-debug.a",6233624,"7e0f6fb2c2c2915ef19910119efe82ac",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasmfs-icase.a",6206758,"d3be86d2155b3ef823f11a5719d4a6a1",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasmfs-mt-asan-debug-icase.a",7786548,"548ffa037b82ccb9b952854624654f41",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasmfs-mt-asan-debug.a",7743202,"50e06234f00c71deb585c16b1e20983d",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasmfs-mt-asan-icase.a",7681122,"26dc3f87a55cacf0b3569687199059ef",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasmfs-mt-asan.a",7635140,"c2056a717a8cd0c4744d7a1707fea262",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasmfs-mt-debug-icase.a",6276664,"e0c6ba457e2448cb4254712ecf02394d",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasmfs-mt-debug.a",6236128,"9f9d170a961556c47548fc81af614015",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasmfs-mt-icase.a",6209170,"582673c92e3cdc9a7d42f59e8a280056",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasmfs-mt.a",6169908,"5dd82287c27b3daee7365db0a6ad3e73",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasmfs-ww-asan-debug-icase.a",7786228,"e862e2bec8399a5b795c97eec902b6a1",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasmfs-ww-asan-debug.a",7742882,"76a86ada23c6e396c0adf124080fd657",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasmfs-ww-asan-icase.a",7680796,"52ec874536d468b0418005aef7ac51cf",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasmfs-ww-asan.a",7634814,"fb462200d343cc466b93f34fa885c2a0",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasmfs-ww-debug-icase.a",6276486,"f44750e86c93e73c5b7e830763bfa7b1",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasmfs-ww-debug.a",6235950,"6892beb0243390397ee1608c8134b637",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasmfs-ww-icase.a",6208976,"62ce7ae8032d4715aa72823c2a406269",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasmfs-ww.a",6169714,"2562140dcbc950d25a765ea3255d4079",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwasmfs.a",6167496,"dac7521057afefc7b1304ab49147f219",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwebgpu_cpp-mt.a",194986,"a0a3128517ebe704e40125fd9b27744a",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwebgpu_cpp-ww.a",194960,"3a98ae84d23657bded86fe1e07af0ebb",""],
    ["./cache/sysroot/lib/wasm32-emscripten/libwebgpu_cpp.a",194914,"34452a5b064239d69ec3888972959c3b",""],
];

async function get_files_url(array, cacheUrl)
{
    array.forEach(element => {
        element[3] = `${cacheUrl}/${element[2]}.a`;
    });
}


let lazyCacheUrl = "http://localhost:3000/static_lib/lazy_cache";

get_files_url(lazyCacheArray, lazyCacheUrl);
export default lazyCacheArray;