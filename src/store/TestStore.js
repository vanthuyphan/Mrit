import {observable, action} from 'mobx'

class TestStore {
    @observable lovely = "122";

    @action loadingCompleted() {
        this.loading = false;
    }

    @action toggleLoading() {
        this.loading = this.loading ? false : true;
    }
}

export default new TestStore();