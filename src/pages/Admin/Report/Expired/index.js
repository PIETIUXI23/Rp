//Day la bao cao het han
import React from 'react';

function Expired() {
    return (
        <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="x_panel">
                <div className="x_title">
                    <h2 style={{ display: 'inline-block' }}>
                        <strong>Danh sách khách sắp hết hợp đồng (trong vòng 30 ngày)</strong>
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
                                htmlFor="serviceName"
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
                            <label className="col-fhd-1 col-xlg-1 col-md-1 col-sm-12 col-xs-1">
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
                                        <th>Họ tên khách</th>
                                        <th>Địa chỉ</th>
                                        <th>Điện thoại</th>
                                        <th>Nhà</th>
                                        <th>Thuê phòng</th>
                                        <th>Số HĐ</th>
                                        <th>Ngày ký</th>
                                        <th>Ngày hết hạn HĐ</th>
                                        <th>Số ngày còn lại</th>
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

export default Expired;
