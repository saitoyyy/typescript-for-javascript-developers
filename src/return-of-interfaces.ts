export {};

class Mahotsukai {}

class Souryo {}

// point: 複数のclassは継承できないが、複数のinterfaceは継承ができる
class Taro extends Mahotsukai {}

interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }

  kougeki(): void {
    console.log('kougeki')
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();