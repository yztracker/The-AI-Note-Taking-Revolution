import React from "react";
import "antd/dist/antd.css";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";



const UploadButton = ({ onChange, onPreview, fileList, aspect, listType }) => {
  return (
    <div>
      <ImgCrop aspect={(aspect)?aspect:"1"}rotate>
        <Upload
          listType={ listType? listType:"picture-card"}
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 1 && "+ Upload"}
        </Upload>
      </ImgCrop>
    </div>
  );
};

export default UploadButton;
