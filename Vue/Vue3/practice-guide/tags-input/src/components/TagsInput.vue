<template>
  <div class="tags-input-wrapper">
    <span class="tag-item" v-for="(item, index) in tags" :key="item">
      {{item}}
      <a class="remove-tag" href="#" @click.prevent="deleteTag(index)">&times;</a>
    </span>
    <hr>
    <input type="text" @keydown.enter="addNewTag" @keydown.tab.prevent="addNewTag" v-model.trim="newTag"
      @keydown.delete="removeLastTag" :class="existTag ? 'tag-exist' : ''" class="tag-input" />
    <!-- 
      :value="newTag"
      @input="newTag = $event.target.value" 
    -->
  </div>
</template>

<script>
export default {
  props: {
    selectedTag: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      tags: [...this.selectedTag],
      newTag: ''
    }
  },
  methods: {
    addNewTag() {
      if (this.newTag && !this.existTag) {
        this.tags.push(this.newTag)
        this.newTag = ''
        this.$emit('change', this.tags)
      }
    },
    deleteTag(index) {
      this.tags.splice(index, 1)
      this.$emit('change', this.tags)
    },
    removeLastTag() {
      if (this.newTag === '' && this.tags.length) {
        this.deleteTag(this.tags.length - 1)
      }
    }
  },
  computed: {
    existTag() {
      return this.tags.includes(this.newTag)
    }
  },
  watch: {
    newTag(newVal, oldVal) {
      if (newVal.indexOf(',') !== -1) {
        this.newTag = newVal.split(',')[0]
        this.addNewTag()
      }
    }
  }
}
</script>

<style scoped>
.tag-input.tag-exists {
  color: red;
  text-decoration: line-through;
}

.tags-input-wrapper {
  background: #fff;
  padding: 0.5em;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 36px;
  box-sizing: border-box;
}

.tag-item {
  color: #212529;
  background-color: #eee;
  margin-right: 0.3em;
  padding: 0.25em 0.4em;
  font-size: 75%;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 1.25em;
  padding-left: 0.6em;
}

.tag-input {
  color: #495057;
  flex: 1;
  background: transparent;
  border: none;
}

.tag-input:focus {
  outline: none;
}

a.remove-tag {
  text-decoration: none;
}
</style>