import { LikeComponent } from "./like";

let component = new LikeComponent(124, true);
component.displayState();
console.log("Clicking Like Button");
component.onClick();
component.displayState();
console.log("Clicking Like Button Again");
component.onClick();
component.displayState();