/**
 *  constants
 *
 *  各要素間でやりとりするtypeを定数のように定義します
 */
import keyMirror from "keymirror"; /* key を value にもセットするだけのモジュール */

export default keyMirror({
  TODO_CREATE: null,
  TODO_COMPLETE: null,
  TODO_DESTORY: null,
  TODO_DESTROY_COMPLETED: null,
  TODO_TOGGLE_COMPLETE_ALL: null,
  TODO_UNDO_COMPLETE: null,
  TODO_UPDATE_TEXT: null
});
