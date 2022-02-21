export class LikeComponent {

    constructor(private _noOfLikes: number, private _isSelected: boolean) {

    }

    get noOfLikes() {
        return this._noOfLikes;
    }

    get isSelected() {
        return this._isSelected;
    }

    displayState() {
        console.log(`No of likes: ${this._noOfLikes} | Selected Status: ${this._isSelected}`);
    }

    onClick() {
        // if (this._isSelected) {
        //     this._isSelected = !this._isSelected;
        //     this._noOfLikes--;
        // }
        // else {
        //     this._isSelected = !this._isSelected;
        //     this._noOfLikes++;
        // }

        this._noOfLikes += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
    }

}