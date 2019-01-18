with import <nixpkgs>{};
stdenv.mkDerivation rec {
  name = "HWpython27";
  env = buildEnv {name=name; paths=buildInputs; };
  buildInputs = [
    nodejs-8_x
  ];
}
