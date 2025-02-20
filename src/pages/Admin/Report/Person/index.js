//Day la bao cao thanh vien phong
import React from 'react';

function Person() {
    return (
        <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="x_panel">
                <div className="x_title">
                    <h2 style={{ display: 'inline-block' }}>
                        <strong>Danh sách thành viên theo phòng</strong>
                    </h2>
                    <div className="clearfix"></div>
                </div>
                <div className="x_content">
                    <form
                        data-parsley-validate=""
                        className="form-horizontal form-label-left"
                        method="post"
                    >
                        <div className="form-group">
                            <label
                                className="col-fhd-1 col-xlg-1 col-md-1 col-sm-12 col-xs-1"
                                htmlFor="areaID"
                            >
                                Nhà
                            </label>
                            <div className="col-fhd-2 col-xlg-2 col-md-2 col-sm-12 col-xs-2">
                                <input
                                    type="text"
                                    style={{ width: '100%' }}
                                    name="areaID"
                                    id="areaID"
                                    placeholder="Tất cả"
                                />
                            </div>
                            <label
                                className="col-fhd-1 col-xlg-1 col-md-1 col-sm-12 col-xs-1"
                                htmlFor="roomID"
                            >
                                Phòng
                            </label>
                            <div className="col-fhd-2 col-xlg-2 col-md-2 col-sm-12 col-xs-2">
                                <input
                                    type="text"
                                    style={{ width: '100%' }}
                                    name="roomID"
                                    id="roomID"
                                    placeholder="Phòng"
                                />
                            </div>
                            <label
                                className="col-fhd-1 col-xlg-1 col-md-1 col-sm-12 col-xs-1"
                                htmlFor="statusRent"
                            >
                                Trạng thái
                            </label>
                            <div className="col-fhd-2 col-xlg-2 col-md-2 col-sm-12 col-xs-2">
                                <select
                                    style={{ width: '100%' }}
                                    id="statusRent"
                                    name="statusRent"
                                >
                                    <option value="-1" selected>
                                        Tất cả
                                    </option>
                                    <option value="0">Đang thuê</option>
                                    <option value="1">Đã trả phòng</option>
                                </select>
                            </div>
                            <div
                                className="col-fhd-3 col-xlg-3 col-md-3 col-sm-12 col-xs-1"
                                style={{ float: 'right' }}
                            >
                                <button
                                    className="btn btn-warning"
                                    type="button"
                                    id="watchButton"
                                >
                                    <i className="fa fa-search"></i> Xem
                                </button>
                                <div
                                    id="exportExcel"
                                    style={{ display: 'inline-block' }}
                                ></div>
                            </div>
                        </div>
                        <div className="form-group">
                            <table
                                id="table"
                                className="table table-striped table-bordered dt-responsive nowrap"
                                cellspacing="0"
                                width="100%"
                            >
                                <thead>
                                    <tr>
                                        <th>Nhà</th>
                                        <th>Phòng</th>
                                        <th>Họ tên</th>
                                        <th>Địa chỉ</th>
                                        <th>Điện thoại</th>
                                        <th>CMND</th>
                                        <th>Ngày sinh</th>
                                        <th>Giới tính</th>
                                        <th>Ngày ĐK tạm trú</th>
                                        <th>Số xe</th>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Person;
