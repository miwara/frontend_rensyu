/**
 *  dispatcher
 *
 *  オブザーブパターンらしい
 *  Action をトリガーとして，コールバックを呼ぶ
 *  アプリケーションの中心
 *  Action を受け付けて登録されて Callback を実行
 *
 * dispatch() メソッドを実行されたら，引数にセットされているオブジェクト（ペイロード）を Store に送信
 */
import {Dispatcher} from "flux";

export default new Dispatcher();
