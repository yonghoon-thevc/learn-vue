<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo" />
    <span class="addContainer" @click="addTodo">할 일 추가</span>

    <!-- use the modal component, pass in the prop -->
    <AlertModal v-if="showModal" @close="showModal = false">
      <!-- slot: 일부 UI 재사용 가능, 모달 내용 재정의 -->
      <h3 slot="header">
        경고!
        <span class="closeModalBtn" @click="showModal = false">확인</span>
      </h3>
      <h3 slot="body">아무것도 입력하지 않으셨습니다.</h3>
    </AlertModal>
  </div>
</template>
<script>
import AlertModal from "./common/AlertModal.vue";

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        this.$emit("addTodoItem", this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
  components: {
    AlertModal,
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  widows: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}

.closeModalBtn {
  color: #42b983;
}
</style>
