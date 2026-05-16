import Text "mo:core/Text";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";

actor {
  type Mantra = {
    id : Nat;
    name : Text;
    deity : Text;
    language : Text;
    mantraText : Text;
    transliteration : Text;
    meaning : Text;
    benefits : Text;
    categories : [Text];
  };

  type Pooja = {
    id : Nat;
    name : Text;
    deity : Text;
    occasion : Text;
    requiredItems : [Text];
    procedure : [Text];
    duration : Nat;
    significance : Text;
  };

  module Mantra {
    public func compare(m1 : Mantra, m2 : Mantra) : Order.Order {
      Text.compare(m1.name, m2.name);
    };
  };

  module Pooja {
    public func compare(p1 : Pooja, p2 : Pooja) : Order.Order {
      Text.compare(p1.name, p2.name);
    };
  };

  var nextId = 0;

  func getNextId() : Nat {
    let id = nextId;
    nextId += 1;
    id;
  };

  let mantras = Map.empty<Nat, Mantra>();
  let poojas = Map.empty<Nat, Pooja>();

  public shared ({ caller }) func addMantra(name : Text, deity : Text, language : Text, mantraText : Text, transliteration : Text, meaning : Text, benefits : Text, categories : [Text]) : async Nat {
    let id = getNextId();
    let mantra : Mantra = {
      id;
      name;
      deity;
      language;
      mantraText;
      transliteration;
      meaning;
      benefits;
      categories;
    };
    mantras.add(id, mantra);
    id;
  };

  public shared ({ caller }) func addPooja(name : Text, deity : Text, occasion : Text, requiredItems : [Text], procedure : [Text], duration : Nat, significance : Text) : async Nat {
    let id = getNextId();
    let pooja : Pooja = {
      id;
      name;
      deity;
      occasion;
      requiredItems;
      procedure;
      duration;
      significance;
    };
    poojas.add(id, pooja);
    id;
  };

  public query ({ caller }) func getMantra(id : Nat) : async Mantra {
    switch (mantras.get(id)) {
      case (null) { Runtime.trap("Mantra not found") };
      case (?mantra) { mantra };
    };
  };

  public query ({ caller }) func getPooja(id : Nat) : async Pooja {
    switch (poojas.get(id)) {
      case (null) { Runtime.trap("Pooja not found") };
      case (?pooja) { pooja };
    };
  };

  public query ({ caller }) func getAllMantras() : async [Mantra] {
    mantras.values().toArray().sort();
  };

  public query ({ caller }) func getAllPoojas() : async [Pooja] {
    poojas.values().toArray().sort();
  };

  public query ({ caller }) func getMantrasByCategory(category : Text) : async [Mantra] {
    mantras.values().toArray().filter(
      func(mantra) {
        mantra.categories.find(
          func(cat) { Text.equal(cat, category) }
        ) != null;
      }
    );
  };

  public query ({ caller }) func getPoojasByOccasion(occasion : Text) : async [Pooja] {
    poojas.values().toArray().filter(
      func(pooja) {
        Text.equal(pooja.occasion, occasion);
      }
    );
  };
};
