// 参考：
// https://blog.wax-o.com/2019/01/typescript-cannot-find-module-for-scss-less-images-files-wasm/
// https://github.com/moorain/MyNotes/issues/12

declare module '*.less'{
  const content: any;
  export default content;
}