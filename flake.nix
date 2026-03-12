{
  description = "CWM Devshell";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.11";
  };

  outputs = {nixpkgs, ...}: let
    system = "x86_64-linux";
    pkgs = import nixpkgs { inherit system; };

  in {
    devShells.${system}.default = pkgs.mkShell { 
      shellHook = ''
        echo "Hello $(${pkgs.git}/bin/git config user.name)"
        echo "✅ JavaFX development shell ready. JAVA_HOME is set to $JAVA_HOME"
      '';
    };
  };
}
