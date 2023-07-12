import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function AdminHome() {

  const { t } = useTranslation();

  return (
    <div className="center">
      <Button variant="primary" as={Link} to="/admin/maintain-categories">{t("maintain-categories")}</Button>{' '}
      <Button variant="secondary" as={Link} to="/admin/maintain-shops">{t("maintain-shops")}</Button>{' '}
      <Button variant="success" as={Link} to="/admin/maintain-products">{t("maintain-products")}</Button>{' '}
      <Button variant="warning" as={Link} to="/admin/add-product">{t("add-product")}</Button>{' '}
    </div>
  )
}

export default AdminHome